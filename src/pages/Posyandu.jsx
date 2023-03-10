import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RLink, useSearchParams } from "react-router-dom";
import spreadsheetService from "../services/spreadsheet.service";

const Posyandu = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const toast = useToast();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    await spreadsheetService.getAll("2023").then((response) => {
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
            <Button
              mb={6}
              as={RLink}
              to={"/tambah-posyandu?rw=" + searchParams.get("rw")}
              mr={4}
              colorScheme={"facebook"}
            >
              Tambah Data Posyandu
            </Button>
            <Text textAlign={"center"} fontSize={"xl"} fontWeight={"500"}>
              Data Posyandu RW 0 {searchParams.get("rw")}
            </Text>
          </CardHeader>
          <CardBody>
            {data.length > 0 ? (
              <TableContainer>
                <Table size={"sm"} variant={"simple"}>
                  <TableCaption>
                    <h3>Data Posyandu Kelurahan Pungkur 2022</h3>
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
                      <Tr key={item}>
                        {item.map((a, b) =>
                          i > 0 ? (
                            <Td key={`i_${i}${b}`} align={"center"}>
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

export default Posyandu;
