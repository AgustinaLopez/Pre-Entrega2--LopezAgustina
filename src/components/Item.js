import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
    <div>
        <Card maxW='sm'>
            <CardBody>
          <Link to ={`/item/${producto.id}`}>
              <Image
                src={producto.img}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
          </Link>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{producto.name}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                  {producto.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
                <Link to ={`comprar/${producto.id}`} >
                    <Button variant='solid' colorScheme='green'>
                        Agregar al Carrito
                    </Button>
                </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>

    </div>
  )
}

export default Item