export const theme = {
  darkTheme: {
    colors: {
      backgroundPrimary: "#1D1D1D",
      primaryColor: "#E10856",
      secondaryColor: "#FF00F5",
      tertiaryColor: "#0FEFFD",
      neutralColor: "#FFFFFF",
      gradient: {
        deg: 90,
        orientations: {
          beginning: {
            color: "rgba(15,239,253,1)",
            percent: "0%",
          },
          middle: {
            color: "rgba(248,7,245,1)",
            percent: "55%",
          },
          end: {
            color: "rgba(15,239,253,0.22)",
            percent: "80%",
          },
        },
      },
    },
    font: {
      family: "Roboto, sans-serif",
      titles: {
        h1: {
          fontSize: "56px",
          fontHeight: "64x",
          fontWeight: 500,
        },
        h2: {
          fontSize: "40px",
          fontHeight: "48px",
          fontWeight: 500,
        },
        h3: {
          fontSize: "32px",
          fontHeight: "40px",
          fontWeight: 500,
        },
        h4: {
          fontSize: "24px",
          fontHeight: "32px",
          fontWeight: 500,
        },
        h5: {
          fontSize: "18px",
          fontHeight: "24px",
          fontWeight: 500,
        },
        h6: {
          fontSize: "16px",
          fontHeight: "24px",
          fontWeight: 500,
        },
      },
      paragraph: {
        big: {
          fontSize: "16px",
          fontHeight: "32px",
        },
        medium: {
          fontSize: "16px",
          fontHeight: "24px",
        },
        small: {
          fontSize: "14px",
          fontHeight: "12px",
        },
      },
    },
  },
};
