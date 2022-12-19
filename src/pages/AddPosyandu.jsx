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
import { Autocomplete } from "chakra-ui-simple-autocomplete";
import { useEffect, useState } from "react";
import { Form, Link as RLink, useSearchParams } from "react-router-dom";
import spreadsheetService from "../services/spreadsheet.service";

const AddPosyandu = () => {
  const toast = useToast();
  const [namaBalita, setNamaBalita] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [namaAyah, setNamaAyah] = useState("");
  const [namaIbu, setNamaIbu] = useState("");
  const [rw, setRw] = useState("");
  const [rt, setRt] = useState("");
  const [usia, setUsia] = useState("");
  const [lk, setLk] = useState("");
  const [tb, setTb] = useState("");
  const [bb, setBb] = useState("");
  const [llt, setLlt] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setRw(searchParams.get("rw"));
  });

  const reset = () => {
    setNamaBalita("");
    setNamaAyah("");
    setNamaIbu("");
    setRw("");
    setRt("");
    setTanggalLahir("");
    setUsia("");
    setLk("");
    setTb("");
    setBb("");
    setLlt("");
  };

  const [result, setResult] = useState([]);

  const options = [
    { value: "javascript", label: "Javascript" },
    { value: "chakra", label: "Chakra" },
    { value: "react", label: "React" },
    { value: "css", label: "CSS" },
  ];

  const handleSubmit = async () => {
    let data = [
      namaBalita.toUpperCase(),
      rt,
      rw,
      tanggalLahir,
      namaIbu.toUpperCase(),
      namaAyah.toUpperCase(),
      usia,
      tb,
      bb,
      lk,
      llt,
    ];
    await spreadsheetService
      .insertRecord("2023", data)
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
        console.log(err);
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
            <Text fontSize={"2xl"}>Tambah Posyandu</Text>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel>Nama Balita</FormLabel>
                <Input
                  placeholder="Nama Balita"
                  value={namaBalita}
                  onChange={(e) => setNamaBalita(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Rukun Tetangga (RT)</FormLabel>
                <NumberInput
                  value={rt}
                  onChange={(valueString) => setRt(valueString)}
                >
                  <NumberInputField placeholder="RT" />
                </NumberInput>
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Rukun Warga (RW)</FormLabel>
                <NumberInput
                  value={rw}
                  onChange={(valueString) => setRw(valueString)}
                >
                  <NumberInputField placeholder="RW" />
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
              <FormControl mb={4} isRequired>
                <FormLabel>Usia (bulan)</FormLabel>
                <Input
                  type={"text"}
                  value={usia}
                  textTransform={"uppercase"}
                  placeholder="Usia (bulan)"
                  onChange={(e) => setUsia(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Tinggi Badan (cm)</FormLabel>
                <Input
                  type={"text"}
                  value={tb}
                  textTransform={"uppercase"}
                  placeholder="Tinggi Badan (cm)"
                  onChange={(e) => setTb(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Berat Badan (kg)</FormLabel>
                <Input
                  type={"text"}
                  value={bb}
                  textTransform={"uppercase"}
                  placeholder="Berat Badan (kg)"
                  onChange={(e) => setBb(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Lingkar Kepala (cm)</FormLabel>
                <Input
                  type={"text"}
                  value={lk}
                  textTransform={"uppercase"}
                  placeholder="Lingkar Kepala (lk)"
                  onChange={(e) => setLk(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Lingkar Tangan (cm)</FormLabel>
                <Input
                  type={"text"}
                  value={llt}
                  textTransform={"uppercase"}
                  placeholder="Lingkar Tangan (cm)"
                  onChange={(e) => setLlt(e.target.value)}
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

export default AddPosyandu;
