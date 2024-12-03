import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

const MonoUIPageCard = ({ title, description, href }) => {
  return (
    <Card className="max-w-[400px] p-1">
      <CardHeader className="flex gap-4">
        <div className="flex items-center justify-center w-24 h-16 bg-gray-900 rounded-lg">
          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400">
            <p>Mono UI</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{href}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={href}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MonoUIPageCard;
