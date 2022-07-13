// next
import NextLink from "next/link";
import Image from "next/image";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
} from "@mui/material";
// routes
import { PATH_MAIN } from "src/routes/paths";
// components
import SocialsButton from "../../../components/SocialsButton";
import useSettings from "src/hooks/useSettings";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Minimal",
    children: [
      { name: "About us", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "support@minimals.cc", href: "#" },
      { name: "Los Angeles, 359  Hidden Valley Road", href: "#" },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const settings = useSettings();

  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            {settings.themeMode === "dark" ? (
              <Link href={PATH_MAIN.root}>
                <Image
                  alt={"Logo"}
                  src="/logo_fondo_oscuro.svg"
                  width={200}
                  height={51}
                />
              </Link>
            ) : (
              <Link href={PATH_MAIN.root}>
                <Image
                  alt={"Logo"}
                  src="/logo_fondo_claro.svg"
                  width={200}
                  height={51}
                />
              </Link>
            )}
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="h6" sx={{ pr: { md: 5 } }}>
              Nuestra misión es ayudar a los consumidores a escoger el producto
              perfecto para sus necesidades y presupuesto.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link
                        color="inherit"
                        variant="body2"
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="h6"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: "center",
          }}
        >
          SOLOTODO 2022 | Todos los derechos reservados | Holanda #321,
          Providencia, Santiago de Chile
        </Typography>
      </Container>
    </RootStyle>
  );
}