/** @jsx jsx */
import { jsx, Image, Heading } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path={"/"}
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    >
      <Heading as="h2" style={{ color: "#6d6b86" }}>
        Webectro
      </Heading>
    </Link>
  );
}
