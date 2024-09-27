import { Box, } from "@mui/material";
import { Card } from "./style";

interface CardProps {
  background: string;
  width: string;
  height: string;
  onClick: () => void;
  color: string;
  children?: React.ReactNode;
}

export default function Cards({ background, width, height, color, onClick, children }: CardProps) {
  return (
    <Box>
      <Card 
        onClick={onClick}
        style={{
          backgroundColor: background,
          width: width,
          height: height,
          color: color,                    
        }}
      >
        {children}
      </Card>
    </Box>
  );
}
