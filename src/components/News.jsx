import { useEffect, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import axios from "axios";
import moment from "moment";
// import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const [cryptoNews, setCryptoNews] = useState([]);

    const demoImg = "../images/defaultImg.jpg";

    useEffect(() => {
        const fetchQuotes = async () => {
            const res = await axios.get(
                `https://real-time-news-data.p.rapidapi.com/top-headlines`,
                {
                    headers: {
                        "X-RapidAPI-Key":
                            "a5c8cd6ab2msha6b5551b717edaap14764fjsn84c91deaa288",
                        "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
                    },
                }
            );
            setCryptoNews(res.data);
        };
        fetchQuotes();
        console.log(cryptoNews);
    }, []);

    console.log(cryptoNews);

    if (!cryptoNews?.data) return "Loading...";

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews?.data?.map((oneNews, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={oneNews.link} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>
                                    {oneNews.title}
                                </Title>
                                <img
                                    style={{
                                        maxWidth: "200px",
                                        maxHeight: "100px",
                                    }}
                                    src={oneNews?.photo_url || demoImg}
                                    alt="news"
                                />
                            </div>
                            <div className="provider-container">
                                <div>
                                    <Avatar
                                        src={
                                            oneNews?.source_favicon_url ||
                                            demoImg
                                        }
                                        alt="logo"
                                    />
                                </div>
                                <Text>
                                    {moment(oneNews.published_datetime_utc)
                                        .startOf("ss")
                                        .fromNow()}
                                </Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

// const News = () => {
//     const [cryptoNews, setCryptoNews] = useState([]);

//     useEffect(() => {
//         const fetchQuotes = async () => {
//             const res = await axios.get(
//                 `https://news67.p.rapidapi.com/v2/crypto`,
//                 {
//                     headers: {
//                         "X-RapidAPI-Key":
//                             "a5c8cd6ab2msha6b5551b717edaap14764fjsn84c91deaa288",
//                         "X-RapidAPI-Host": "news67.p.rapidapi.com",
//                     },
//                 }
//             );
//             setCryptoNews(res.data);
//         };
//         fetchQuotes();
//     }, []);

//     if (!cryptoNews?.news) return "Loading...";

//     return (
//         <Row gutter={[24, 24]}>
//             {cryptoNews.news.map((oneNews, i) => (
//                 <Col xs={24} sm={12} lg={8} key={i}>
//                     <Card hoverable className="news-card">
//                         <a href={oneNews.url} target="_blank" rel="noreferrer">
//                             <div className="news-image-container">
//                                 <Title className="news-title" level={4}>
//                                     {oneNews.Title}
//                                 </Title>
//                                 <img
//                                     style={{
//                                         maxWidth: "200px",
//                                         maxHeight: "100px",
//                                     }}
//                                     src={oneNews?.Image}
//                                     alt="news"
//                                 />
//                             </div>
//                             <p>
//                                 {oneNews.Summary > 100
//                                     ? `${oneNews.Summary.substring(0, 100)}...`
//                                     : oneNews.Summary}
//                             </p>
//                         </a>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     );
// };

export default News;
