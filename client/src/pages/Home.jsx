import Page from "../components/Page";

const headContent = (
  <>
    <title>Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <div className="OurFormula text-align: center; font-family: 'SimsSun'; padding: 0%; color: rgb(0, 0, 0); margin-left: 37.5%; width: 25%; margin-top: 20px; margin-bottom: 0px;"><h2>Be Interactive.</h2></div>
      <div className="DoIt2It text-align: center; font-family: 'SimsSun'; padding: 0%; color: rgb(0, 0, 0); margin-left: 37.5%; width: 25%; margin-top: 20px; margin-bottom: 0px;"><h3>Engage with oneself by cherishing this.</h3></div>
    </Page>
  );
}

// continue. sip on water, this sweet, crisp air, treasure each moment - - as one.