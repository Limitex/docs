import React, {
  createContext,
  useContext,
  useState,
  memo,
  useMemo,
  useCallback,
  useEffect,
  Children,
} from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const MAX_TREE_DEPTH = 10;
const PADDING_STEP = 20;
const PADDING_LEFT = 6;

type IconComponentType = React.ComponentType<{ className: string }>;
export type ColorVariant = "primary" | "secondary" | "highlight";

type TreeRootProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  itemClassName?: string;
  defaultExpanded?: boolean;
};

type TreeItemProps = {
  name: string;
  type?: IconComponentType;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  itemClassName?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  variant?: ColorVariant;
};

type TreeContextType = {
  level: number;
  defaultExpanded: boolean;
  containerClassName?: string;
  itemClassName?: string;
};

const TreeContext = createContext<TreeContextType>({
  level: 0,
  defaultExpanded: false,
});

class TreeErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Tree component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500">
          Something went wrong in the tree component.
        </div>
      );
    }

    return this.props.children;
  }
}

const getVariantStyles = (variant: ColorVariant): string => {
  const primary =
    "hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-400/10 dark:hover:text-primary-600";
  const secondary =
    "hover:bg-secondary-100 hover:text-secondary-800 dark:hover:bg-secondary-400/10 dark:hover:text-secondary-600";
  const highlight =
    "bg-primary-100 text-primary-800 dark:bg-primary-400/10 dark:text-primary-600";

  switch (variant) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    case "highlight":
      return highlight;
    default:
      return primary;
  }
};

const createKeyboardHandler =
  (handler: () => void) => (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handler();
    }
  };

const Root = memo(
  ({
    children,
    className = "",
    containerClassName = "",
    itemClassName = "",
    defaultExpanded = false,
  }: TreeRootProps) => {
    const contextValue = useMemo(
      () => ({
        level: 0,
        defaultExpanded,
        containerClassName,
        itemClassName,
      }),
      [defaultExpanded, containerClassName, itemClassName]
    );

    return (
      <TreeErrorBoundary>
        <TreeContext.Provider value={contextValue}>
          <div
            role="tree"
            className={`font-mono ${className}`}
            aria-label="Tree navigation"
          >
            {children}
          </div>
        </TreeContext.Provider>
      </TreeErrorBoundary>
    );
  }
);

Root.displayName = "TreeRoot";

const Item = memo(
  ({
    children,
    name,
    type: IconComponent,
    onClick,
    defaultExpanded: itemDefaultExpanded,
    className = "",
    itemClassName = "",
    disabled = false,
    variant = "primary",
  }: TreeItemProps) => {
    const {
      level,
      defaultExpanded: rootDefaultExpanded,
      containerClassName,
      itemClassName: contextItemClassName,
    } = useContext(TreeContext);

    const isLeaf = !children;

    useEffect(() => {
      if (level > MAX_TREE_DEPTH) {
        console.error(
          `Maximum tree depth of ${MAX_TREE_DEPTH} exceeded at item: ${name}. This may cause performance issues.`
        );
      }
    }, [level, name]);

    if (level > MAX_TREE_DEPTH) {
      return null;
    }

    const [isExpanded, setIsExpanded] = useState(
      itemDefaultExpanded !== undefined
        ? itemDefaultExpanded
        : rootDefaultExpanded
    );

    const handleClick = useCallback(() => {
      if (isLeaf) {
        if (!disabled && onClick) {
          onClick();
        }
      } else {
        setIsExpanded((prev) => !prev);
      }
    }, [isLeaf, disabled, onClick]);

    const handleKeyDown = useMemo(
      () => createKeyboardHandler(handleClick),
      [handleClick]
    );

    const finalItemClassName = `flex items-center px-2 py-1 rounded cursor-default
      ${getVariantStyles(variant)}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${itemClassName || contextItemClassName || ""}
      ${className}`;

    const contextValue = useMemo(
      () => ({
        level: level + 1,
        defaultExpanded: rootDefaultExpanded,
        containerClassName,
        itemClassName: contextItemClassName,
      }),
      [level, rootDefaultExpanded, containerClassName, contextItemClassName]
    );

    return (
      <div
        role="treeitem"
        aria-expanded={!isLeaf ? isExpanded : undefined}
        aria-selected={isLeaf ? false : undefined}
        aria-disabled={isLeaf ? disabled : undefined}
        aria-label={name}
        data-level={level}
      >
        <div
          className={finalItemClassName}
          style={{
            paddingLeft: `${
              (isLeaf ? level + 1 : level) * PADDING_STEP + PADDING_LEFT
            }px`,
          }}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
        >
          {!isLeaf && (
            <span
              className="flex items-center justify-center"
              aria-hidden="true"
              style={{ width: `${PADDING_STEP}px` }}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </span>
          )}
          {IconComponent && (
            <div
              className="flex items-center justify-center"
              style={{ width: `${PADDING_STEP}px` }}
            >
              <IconComponent className="w-4 h-4" />
            </div>
          )}
          <span className="ml-1 text-sm">{name}</span>
        </div>
        {!isLeaf && isExpanded && (
          <TreeContext.Provider value={contextValue}>
            <div role="group" data-parent={name}>
              {children}
            </div>
          </TreeContext.Provider>
        )}
      </div>
    );
  }
);

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full p-4 mt-8 border rounded-lg lg:px-5 dark:border-neutral-800">
      {children}
    </div>
  );
};

Item.displayName = "TreeItem";

const Tree = {
  Container,
  Root,
  Item,
};

export default Tree;
