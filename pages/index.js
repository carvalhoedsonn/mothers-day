import { Box, Text, Image, Flex, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="150px"
        >
          <Flex direction="column" marginRight="100px" padding="10px">
            <Text fontSize="25px" fontWeight="bold" color="#C769AA">
              HAPPY MOTHERS DAY
            </Text>
            <Text
              fontSize="20px"
              fontWeight="semibold"
              color="#C769AA"
              marginTop="5px"
              marginBottom="20px"
            >
              The most perfect women's day, mothers ❤️
            </Text>
            <Collapse startingHeight={0} in={show}>
              <Text maxWidth="599px" color="#595F4F">
                Elas tem a capacidade de ouvir o silêncio. Adivinhar
                sentimentos. Encontrar a palavra certa nos momentos incertos.
                Nos fortalecer quando tudo ao nosso redor parece ruir. Sabedoria
                emprestada dos deuses para nos proteger e amparar. Sua
                existência é em si um ato de amor. Gerar, cuidar, nutrir. Amar,
                amar, amar... Amar com um amor incondicional que nada espera em
                troca. Afeto desmedido e incontido, Mãe é um ser infinito.
              </Text>
              <Text marginTop="10px" maxWidth="599px" color="#595F4F">
                Mãe, você é simplesmente a mãe mais batalhadora de sempre! Você
                consegue multiplicar-se de um modo tão peculiar, tão atento, tão
                forte. Coisas dessas estão somente à altura de pessoas como
                você, Mãe!
              </Text>
            </Collapse>
            <Button
              width="150px"
              marginTop="10px"
              onClick={handleToggle}
              backgroundColor="#C769AA"
              color="white"
              _hover={{ bg: "#D287BB" }}
            >
              Clique aqui
            </Button>
          </Flex>
          <Image
            width="700px"
            height="700px"
            src="/mother.png"
            marginLeft="100px"
            padding="10px"
          />
        </Box>
      </main>
    </div>
  );
}
