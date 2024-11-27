export default {
  logo: <span>Limitex Documents</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Limitex Docs" />
      <meta property="og:description" content="Limitex Documents" />
    </>
  ),
  project: {
    link: "https://github.com/Limitex/docs",
  },
  docsRepositoryBase: "https://github.com/Limitex/docs/blob/main",
  feedback: {
    content: "Feedback →",
    useLink: () => "https://github.com/Limitex/docs/issues/new",
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/Limitex" target="_blank">
          Limitex
        </a>
        .
      </span>
    ),
  },
};
