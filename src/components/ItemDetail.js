import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Divider, ButtonGroup,} from '@chakra-ui/react'
// import productos from'./productos.json'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Item from './Item'

const ItemDetail = ({productos}) => {
  const {cardId} = useParams()
  const seleccionado = productos.find ((item) => item.id === cardId)
  return (
    <div>
      <Card maxW='sm'>
            <CardBody>
              <Image
                src={seleccionado.img}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{seleccionado.name}</Heading>
                <Text>
                  {seleccionado.descrip}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  {seleccionado.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
                <Link to ={`comprar/${seleccionado.id}`} >
                    <Button variant='solid' colorScheme='green'>
                        Agregar al Carrito
                    </Button>
                </Link>
                <Link to = "/">
                    <Button variant='ghost' colorScheme='green'>
                       Volver
                    </Button>
                </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
    </div>
  )
}

export default ItemDetail