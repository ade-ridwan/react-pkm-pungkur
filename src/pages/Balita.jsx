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
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RLink } from "react-router-dom";
import spreadsheets from "./../services/spreadsheet.service";

const Balita = () => {
  const [data, setData] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    await spreadsheets.getAll("data_balita").then((response) => {
      setData(response.data?.data);
    });
  };

  const handleSave = () => {};

  return (
    <Box padding={4} background={"gray.100"} minH={"100vh"}>
      <Box maxW={"container.lg"} margin={"auto"}>
        <Button
          background={"transparent"}
          mr={4}
          mb={2}
          onClick={() => {
            window.history.back();
          }}
        >
          Kembali
        </Button>
        <Card background={"white"}>
          <CardHeader>
            <Link as={RLink} to="/tambah-balita" mr={4}>
              <Button colorScheme={"telegram"}>Tambah Balita</Button>
            </Link>
          </CardHeader>
          <CardBody>
            {data.length > 1 ? (
              <TableContainer>
                <Table size={"sm"} variant={"simple"}>
                  <TableCaption>
                    <h3>Data Balita Kelurahan Pungkur</h3>
                  </TableCaption>
                  <Thead background={"gray.50"}>
                    <Tr>
                      {data[0].map((item, i) => (
                        <Th key={i}>{item}</Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((item, i) => (
                      <Tr key={i}>
                        {item.map((a, b) =>
                          i > 0 ? (
                            <Td key={b} align={"center"}>
                              {a}
                            </Td>
                          ) : (
                            <span></span>
                          )
                        )}
                      </Tr>
                    ))}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      {data[0].map((item, i) => (
                        <Th key={i}>{item}</Th>
                      ))}
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            ) : (
              <div align={"center"}>Loading...</div>
            )}
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default Balita;
