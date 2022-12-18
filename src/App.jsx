import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Link,
  Button,
  Table,
  TableCaption,
  HStack,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Tfoot,
  Image,
  List,
  ListIcon,
  ListItem,
  LinkBox,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import AppHeader from "./components/AppHeader";
import spreadsheets from "./services/spreadsheet.service";

function App() {
  const getApi = async () => {
    await spreadsheets.getAll("data_balita").then((response) => {
      setData(response.data?.data);
    });
  };

  const handleSave = () => {};

  return (
    <Box paddingX={4} paddingY={8} background={"gray.100"} minH={"100vh"}>
      <Card
        borderTop={"4px"}
        borderColor={"red.500"}
        maxW={"max-content"}
        margin={"auto"}
        background={"white"}
        padding={4}
      >
        <CardHeader display={"flex"} justifyContent={"center"}>
          <Box>
            <Box display={"flex"} justifyContent={"center"} mb={8}>
              <Image
                width="66px"
                src="/logo.png"
                alt="Dan Abramov"
                margin={"auto"}
              />
              <Image
                width="47px"
                src="/logo-kampus.png"
                alt="Dan Abramov"
                margin={"auto"}
              />
            </Box>
            <Text fontSize={"2xl"} fontWeight={"500"} textAlign={"center"}>
              Pendataan Posyandu Spreedsheet
            </Text>
            <Text
              fontSize={"medium"}
              fontWeight={"400"}
              textAlign={"center"}
              marginTop={1}
            >
              Kelurahan Pungkur Kota Bandung
            </Text>
          </Box>
        </CardHeader>
        <CardBody>
          <List spacing={3}>
            <ListItem>
              <Button
                as={RLink}
                to="/balita"
                width={"full"}
                textAlign={"center"}
                borderRadius={"full"}
                colorScheme={"facebook"}
              >
                Lihat Data Balita
              </Button>
            </ListItem>
            <ListItem>
              <Button
                as={RLink}
                to="/posyandu?rw=1"
                width={"full"}
                textAlign={"center"}
                borderRadius={"full"}
                colorScheme={"facebook"}
              >
                Data Posyandu RW 01
              </Button>
            </ListItem>
            <ListItem>
              <Text fontSize={"small"} textAlign="center" marginTop={6}>
                Digitech University - Pengabdian Kepada Masyarakat
              </Text>
              <Text fontSize={"small"} textAlign="center">
                D3 - Manajemen Informatika 2020
              </Text>
            </ListItem>
          </List>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;
