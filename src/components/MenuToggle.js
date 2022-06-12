import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "src/hooks";
import styled from 'styled-components'

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle, open }) => {
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <Container>
            <motion.div
                initial={false}
                animate={open ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <button onClick={toggle}>
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <Path
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" }
                            }} />
                        <Path
                            d="M 2 9.423 L 20 9.423"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.1 }} />
                        <Path
                            variants={{
                                closed: { d: "M 2 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" }
                            }} />
                    </svg>
                </button>
            </motion.div>
        </Container>
    );
};

const Container = styled.div`
  background: none;
  z-index: 99;

   button {
    outline: none;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
}
`