import { Suspense } from "react";
import styles from "@/styles/SuspenseMainPageLoading.module.css"
import { RutasInterface } from "./RutasInterface";
import { Col, Container, Row } from "react-bootstrap";



export const SuspenseMainPageLoading = ({ children }) => {


    return (
        <Suspense fallback={
            <Container 
            id = {styles.suspenseMainContainer}
            fluid 
            className="bg-dark p-0 pt-3 pt-sm-0 m-0 d-flex flex-column flex-sm-row  scrollHidden justify-content-center p-0 vh-100">

                <RutasInterface />

                <Row  className="m-0 bg-dark m-auto h-100  ">
                    <Col  className="p-0 h-100 d-flex flex-column justify-content-center ">
                        <svg className={`${styles.pl}`} viewBox="0 0 128 128" width="128px" height="128px">
                            <defs>
                                <linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#000" />
                                    <stop offset="100%" stopColor="#fff" />
                                </linearGradient>
                                <mask id="pl-mask">
                                    <rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
                                </mask>
                            </defs>
                            <g strokeLinecap="round" strokeWidth="8" strokeDasharray="32 32">
                                <g stroke="hsl(193,90%,50%)">
                                    <line className={styles.pl__line1} x1="4" y1="48" x2="4" y2="80" />
                                    <line className={styles.pl__line2} x1="19" y1="48" x2="19" y2="80" />
                                    <line className={styles.pl__line3} x1="34" y1="48" x2="34" y2="80" />
                                    <line className={styles.pl__line4} x1="49" y1="48" x2="49" y2="80" />
                                    <line className={styles.pl__line5} x1="64" y1="48" x2="64" y2="80" />
                                    <g transform="rotate(180,79,64)">
                                        <line className={styles.pl__line6} x1="79" y1="48" x2="79" y2="80" />
                                    </g>
                                    <g transform="rotate(180,94,64)">
                                        <line className={styles.pl__line7} x1="94" y1="48" x2="94" y2="80" />
                                    </g>
                                    <g transform="rotate(180,109,64)">
                                        <line className={styles.pl__line8} x1="109" y1="48" x2="109" y2="80" />
                                    </g>
                                    <g transform="rotate(180,124,64)">
                                        <line className={styles.pl__line9} x1="124" y1="48" x2="124" y2="80" />
                                    </g>
                                </g>
                                <g stroke="hsl(283,90%,50%)" mask="url(#pl-mask)">
                                    <line className={styles.pl__line1} x1="4" y1="48" x2="4" y2="80" />
                                    <line className={styles.pl__line2} x1="19" y1="48" x2="19" y2="80" />
                                    <line className={styles.pl__line3} x1="34" y1="48" x2="34" y2="80" />
                                    <line className={styles.pl__line4} x1="49" y1="48" x2="49" y2="80" />
                                    <line className={styles.pl__line5} x1="64" y1="48" x2="64" y2="80" />
                                    <g transform="rotate(180,79,64)">
                                        <line className={styles.pl__line6} x1="79" y1="48" x2="79" y2="80" />
                                    </g>
                                    <g transform="rotate(180,94,64)">
                                        <line className={styles.pl__line7} x1="94" y1="48" x2="94" y2="80" />
                                    </g>
                                    <g transform="rotate(180,109,64)">
                                        <line className={styles.pl__line8} x1="109" y1="48" x2="109" y2="80" />
                                    </g>
                                    <g transform="rotate(180,124,64)">
                                        <line className={styles.pl__line9} x1="124" y1="48" x2="124" y2="80" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className="text-white m-0 text-center  fs-5  ls-0 ms-4">Cargando...</p>
                    </Col>
                </Row>
            </Container>
        }>
            {children}
        </Suspense>
    );
};