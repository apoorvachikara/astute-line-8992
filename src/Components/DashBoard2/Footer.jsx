import { Box, Flex, Text, Wrap, WrapItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <SimpleGrid columns={[ 1, 1]} >
                <Box lineHeight="300%" >
                    <Box marginInline="5%" textAlign="center" fontFamily="arial, sans-serif">
                        <Flex gap="5%" ml="20%" direction='row' textAlign="center">
{/*feedback: fw18_0330 and fw18_0782 - You can use loop here, it seems same just pass text only*/}
                            <a href='DashBoard'>  <Text fontSize="12px" color="#999999" fontWeight="bolder">  Feature Requests </Text></a>
                            <a href='DashBoard'>  <Text fontSize="12px" color="#999999" fontWeight="bolder">  Help Center</Text></a>
                            <a href='DashBoard'>  <Text fontSize="12px" color="#999999" fontWeight="bolder">  Blog & Resources</Text></a>
                            <a href='DashBoard'>  <Text fontSize="12px" color="#999999" fontWeight="bolder">  Pricing</Text></a>
                            <a href='DashBoard'>  <Text fontSize="12px" color="#999999" fontWeight="bolder">  Privacy Policy</Text></a>
                        </Flex>
                    </Box>
                    <Box marginInline="5%" textAlign="center">
                        <Flex gap="6%" ml="25%" direction='row' textAlign='center' >
                            <Text fontSize="14px" color="#999999" fontWeight="bolder">Bonsai Apps:</Text>
                            <a href='https://apps.apple.com/us/app/bonsai-freelance-time-tracker/id1333596451'>  <Text fontSize="14px" color="#999999" fontWeight="bolder">iPhone</Text></a>
                            <a href='https://apps.apple.com/us/app/bonsai-time-tracker/id1432799040?mt=12'>  <Text fontSize="14px" color="#999999" fontWeight="bolder">MacOS</Text></a>
                            <a href='https://play.google.com/store/apps/details?id=com.hellobonsai.bonsai'>  <Text fontSize="14px" color="#999999" fontWeight="bolder">Android</Text></a>
                            <a href='https://chrome.google.com/webstore/detail/bonsai-time-tracker/chipcigldfgoiakidipofgabbcbkmicl'> <Text fontSize="14px" color="#999999" fontWeight="bolder"> Chrome</Text></a>
                        </Flex>   </Box>
                </Box>
                <Box marginInline="5%" textAlign="center" mb="2%" width="90%">
                    <Wrap  ml="10%">
                    <WrapItem textAlign='center'>
                    <Text fontSize="10px" color="#ccd0d2" fontWeight="bold" >©2022 Bonsai Technologies Inc — Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law firm, and does not provide legal services, advice, or representation.   Terms    Credits</Text>
                    </WrapItem>
                    </Wrap>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Footer
