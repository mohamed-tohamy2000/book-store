import React from 'react'
import Section from './Section'
import car from "../../assets/images/sectionlogo/shipping-fast 1.svg"
import card from "../../assets/images/sectionlogo/credit-card-buyer 1.svg"
import restick from "../../assets/images/sectionlogo/restock 1.svg"
import user from "../../assets/images/sectionlogo/user-headset 1.svg"
export default function Assemble() {
    return (
        <>
            <div className=" container justify-between  h-80 flex items-center gap-4 p-9">
                <Section img={car}
                    h="Fast & Reliable Shipping"
                    p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
                />
                <Section img={card}
                    h="Secure Payment"
                    p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
                />
                <Section img={restick}
                    h="Easy Returns"
                    p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
                />
                <Section img={user}
                    h="24/7 Customer Support"
                    p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
                />

            </div>
        </>
    )
}
