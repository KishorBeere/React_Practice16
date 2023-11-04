import AttributionIcon from "@mui/icons-material/Attribution";
import MoodIcon from "@mui/icons-material/Mood";
function Home() {
  return (
    <>
      <div className="home-background">
            <br />
            <div
            style={{
                color: "blue",
                padding: 10,
            }}
            >
            <h1 className="text-center">
                Welcome to MyBank <AttributionIcon />{" "}
            </h1>{" "}
            <br />
            <h4 className="text-center" style={{ color: "ButtonText" }}>
                Your Trusted Financial Partner! <MoodIcon />
            </h4>
            </div>
      </div>
    </>
  );
}

export default Home;
