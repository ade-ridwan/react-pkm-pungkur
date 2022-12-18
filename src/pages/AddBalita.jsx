import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  Link,
  NumberInput,
  NumberInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Link as RLink } from "react-router-dom";
import spreadsheetService from "../services/spreadsheet.service";

const AddBalita = () => {
  const toast = useToast();
  const [namaBalita, setNamaBalita] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [namaAyah, setNamaAyah] = useState("");
  const [namaIbu, setNamaIbu] = useState("");
  const [rw, setRw] = useState("");

  const reset = () => {
    setNamaBalita("");
    setNamaAyah("");
    setNamaIbu("");
    setRw("");
    setTanggalLahir("");
  };

  const handleSubmit = async () => {
    let data = [
      namaBalita.toUpperCase(),
      rw,
      tanggalLahir,
      namaIbu.toUpperCase(),
      namaAyah.toUpperCase(),
    ];
    await spreadsheetService
      .insertRecord("data_balita", data)
      .then((response) => {
        console.log(response.data.data);
        reset();
        toast({
          title: "Berhasil",
          description: "Data berhasil ditambahkan",
          status: "success",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Galat",
          description: "Ada kesalahan.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

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
            <Text fontSize={"2xl"}>Tambah Balita</Text>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel>Nama Balita</FormLabel>
                <Input
                  value={namaBalita}
                  textTransform={"uppercase"}
                  placeholder="Nama Balita"
                  onChange={(e) => setNamaBalita(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Nomor Rukun Warga (RW)</FormLabel>
                <NumberInput
                  value={rw}
                  onChange={(valueString) => setRw(valueString)}
                >
                  <NumberInputField placeholder="Nomor RW" />
                </NumberInput>
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Tanggal Lahir</FormLabel>
                <Input
                  type={"date"}
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Nama Ayah</FormLabel>
                <Input
                  type={"text"}
                  value={namaAyah}
                  textTransform={"uppercase"}
                  placeholder="Nama Ayah"
                  onChange={(e) => setNamaAyah(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Nama Ibu</FormLabel>
                <Input
                  type={"text"}
                  value={namaIbu}
                  textTransform={"uppercase"}
                  placeholder="Nama Ibu"
                  onChange={(e) => setNamaIbu(e.target.value)}
                />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default AddBalita;
