import { Box, Button } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useWindowSize from "../hooks/useWindowSize"; // Custom hook para detectar o tamanho da tela
import { NavBar } from "../components/appBar/NavBar";
import Cards from "../components/CDashbor/Cards";

export default function Dashbord() {
  const { width } = useWindowSize();

  const isSmallScreen = width <= 768;

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: isSmallScreen ? 'column' : 'row',
          width: isSmallScreen ? '100%' : '930px',
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          border: 'solid red 2px',
        }}
      >
        <List>
          <ListItem
            sx={{
              display: 'flex',
              flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <Cards
              width={isSmallScreen ? "90px" : "150px"}
              height={isSmallScreen ? '80px' : '100px'}
              background="#F0F8FF"
              color="#000"
              onClick={() => { }}
            >
              <Button sx={{
                width: isSmallScreen ? "90px" : "150px",
                height: isSmallScreen ? '80px' : '100px'
              }}>
                <h3>Tarefa</h3>
              </Button>
            </Cards>

            <Cards
              width={isSmallScreen ? "90px" : "150px"}
              height={isSmallScreen ? '80px' : '100px'}
              background="#F0F8FF"
              color="#000"
              onClick={() => { }}
            > <Button sx={{
              width: isSmallScreen ? "90px" : "150px",
              height: isSmallScreen ? '80px' : '100px'
            }}>
                <h3>Projetos</h3>
              </Button>
            </Cards>

              <Cards
                width={isSmallScreen ? "90px" : "150px"}
                height={isSmallScreen ? '80px' : '100px'}
                background="#F0F8FF"
                color="#000"
                onClick={() => { }}
              >
              <Button sx={{
                width: isSmallScreen ? '90px' : '150px',
                height: isSmallScreen ? '80px' : '100px',
              
  
              }}>
                <h3>Agenda</h3>
                </Button>
              </Cards>
          
         
              <Cards
                width={isSmallScreen ? "90px" : "150px"}
                height={isSmallScreen ? '80px' : '100px'}
                background="#F0F8FF"
                color="#000"
                onClick={() => { }}
              >   <Button sx={{
                width: isSmallScreen ? '90px' : '150px',
                height: isSmallScreen ? '80px' : '100px',
                
  
              }}>
                <h3>Lista</h3>
                </Button>
              </Cards>
          
          </ListItem>
        </List>
      </Box>
    </div>
  );
};
