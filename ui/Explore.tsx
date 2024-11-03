import { Button, Center, Container, Heading, Icon, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Explore() {
    return (
        <Container py={20}>
            <SimpleGrid gap={10} columns={{ base: 1, lg: 2 }} mb={10}>
                <Heading>Explore Our Premium Services</Heading>
                <Text fontSize={'larger'} textAlign={'justify'}>At care care, we offer a range of top-notch car wash and detailing services designed to meet your vehicle’s needs. From basic washes to comprehensive detailing and polishing, our expert team ensures your car looks its best. Discover the perfect service for your car today.</Text>
            </SimpleGrid>
            <SimpleGrid gap={10} columns={{ base: 1, lg: 3 }} mb={5}>
                {[
                    { img: "/img10.jpg", title: "Basic Car Wash Excellence", description: "Our Basic Car Wash service includes a thorough exterior wash, tire cleaning, and window cleaning. It's ideal for regular maintenance to keep your vehicle looking fresh and clean." },
                    { img: "/img8.jpg", title: "Comprehensive Detailing Service", description: "Our Detailing Service offers deep cleaning and restoration for both the interior and exterior of your vehicle. Perfect for rejuvenating your car's appearance." },
                    { img: "/img11.jpg", title: "Professional Polishing Service", description: "Our Polishing Service restores your vehicle's shine and protects the paintwork from environmental damage. Ideal for cars needing extra care." },
                ].map((i, idx) => (
                    <VStack key={idx} p={2} borderRadius={20} bg='blue.50' justifyContent={'sp'}>
                        <Image alt="Car wash service" rounded={'xl'} src={i.img} boxSize={300} w='full' />
                        <Heading alignSelf={'start'} size={'md'} my={3}>{i.title}</Heading>
                        <Text fontSize={'larger'} mb={10}>{i.description}</Text>
                        <Button alignSelf={'start'} colorScheme="white" borderColor={'black'} borderRightColor={'black'} borderBottomColor={'black'} textColor="blue.500" size="lg" variant="outline">
                            Learn More
                        </Button>
                    </VStack>
                ))}
            </SimpleGrid>
            <SimpleGrid gap={10} columns={{ base: 1, lg: 2 }} my={40}>
                <Center>
                    <VStack>
                        <Heading alignSelf={'start'}>Convenient Online Booking</Heading>
                        <Text my={10} fontSize={'larger'} textAlign={'justify'}>Easily schedule your next car wash with our simple online booking system. Choose from a range of services, select your preferred date and time, and confirm your appointment in just a few clicks. Enjoy a hassle-free experience with care care.</Text>
                        <Button alignSelf={'start'} justifySelf={'end'} colorScheme="white" borderColor={'black'} borderRightColor={'black'} borderBottomColor={'black'} textColor="blue.500" size="lg" variant="outline">
                            Book Now
                        </Button>
                    </VStack>
                </Center>
                <Image src='/cal.svg' alt='Calendar' />
            </SimpleGrid>
            <Center>
                <VStack>
                    <FontAwesomeIcon icon={faWhatsapp} color='#25d366' size='9x'/>
                    <Heading my={10}>WhatsApp Support</Heading>
                    <Text maxW={600} textAlign={'center'}>Connect with our team instantly via WhatsApp for quick assistance and inquiries about our car wash services.</Text>
                    <Button
                        mt={10}
                        as="a"
                        size="lg"
                        href="!#"
                        rel="noopener noreferrer"
                    >Contact Us</Button>
                </VStack>
            </Center>
        </Container>
    )
}
