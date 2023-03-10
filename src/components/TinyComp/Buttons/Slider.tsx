import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
// import VolumeDown from "@mui/icons-material/VolumeDown";
// import VolumeUp from "@mui/icons-material/VolumeUp";
import { BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";

export default function VolumeSlider() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <BsFillVolumeDownFill />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <BsFillVolumeUpFill />
      </Stack>
    </Box>
  );
}
