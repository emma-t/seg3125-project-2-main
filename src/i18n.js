import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            English: {
                translation: {
                    "Home": {
                        "title": "Eco-friendly treasures await you.",
                        "description": "ReviveMart is your one-stop destination for donating clothing and shopping for pre-loved items. We believe in promoting sustainability and giving a new life to gently used clothing. Whether you're looking to declutter your wardrobe or find unique and affordable fashion pieces, ReviveMart has you covered.",
                        "donatetitle": "Donate Your Clothing",
                        "donate": "Make a positive impact by donating your clothing to ReviveMart. We accept clean, gently used clothing items that are in good condition. Your donations will be sorted, curated, and made available for others to purchase. By donating, you not only contribute to reducing textile waste but also support sustainable fashion and help someone find their next favorite outfit.",
                        "donatebtn": "DONATE",
                        "shoptitle": "Shop Pre-Loved Items",
                        "shop": "Discover a wide selection of pre-loved clothing and accessories at affordable prices. Our inventory is constantly updated with unique and stylish items for men, women, and children. By shopping at ReviveMart, you can embrace sustainable fashion and make a conscious choice towards a more eco-friendly lifestyle. Each purchase you make contributes to reducing fashion waste.",
                        "shopbtn": "EXPLORE",
                        "analyticstitle": "Thrifted Items Analytics",
                        "analytics": "Explore the analytics and insights for thrifted items at ReviveMart. Gain valuable information about the environmental impact, popular trends, and more. See how your contributions and purchases contribute to sustainable fashion and reducing textile waste.",
                        "analyticsbtn": "ANALYTICS",
                    },

                    "Navbar": {
                        "Donate": "Donate",
                        "Items": "Our Items",
                        "Analytics": "Analytics",
                        "AboutUs": "About Us",
                        "FAQReviews": "FAQ & Reviews",
                        "Contact": "Contact Us",
                    },

                    "Footer": {
                        "Phone": "Phone",
                        "Email": "Email",
                        "Rights": "All Rights Reserved",
                    }
                }
            },
            Français: {
                translation: {
                    "Home": {
                        "title": "Des trésors respectueux de l'environnement vous attendent.",
                        "description": "ReviveMart est votre destination unique pour donner des vêtements et acheter des articles d'occasion. Nous croyons en la promotion de la durabilité et en donnant une nouvelle vie aux vêtements légèrement usagés. Que vous cherchiez à désencombrer votre garde-robe ou à trouver des pièces de mode uniques et abordables, ReviveMart a tout ce qu'il vous faut.",
                        "donatetitle": "Faites un don de vos vêtements",
                        "donate": "Impactez positivement en faisant un don de vos vêtements à ReviveMart. Nous acceptons des vêtements propres et légèrement usagés en bon état. Vos dons seront triés, organisés et mis à disposition des autres pour l'achat. En faisant un don, vous contribuez non seulement à réduire les déchets textiles, mais vous soutenez également la mode durable et aidez quelqu'un à trouver sa prochaine tenue préférée.",
                        "donatebtn": "FAIRE UN DON",
                        "shoptitle": "Acheter des articles d'occasion",
                        "shop": "Découvrez une large sélection de vêtements d'occasion et d'accessoires à des prix abordables. Notre inventaire est constamment mis à jour avec des articles uniques et élégants pour hommes, femmes et enfants. En faisant vos achats chez ReviveMart, vous pouvez adopter la mode durable et faire un choix conscient en faveur d'un mode de vie plus respectueux de l'environnement. Chaque achat que vous effectuez contribue à réduire les déchets de mode.",
                        "shopbtn": "DÉCOUVRIR",
                        "analyticstitle": "Analytiques des articles thriftés",
                        "analytics": "Explorez les analyses et les informations sur les articles thriftés chez ReviveMart. Obtenez des informations précieuses sur l'impact environnemental, les tendances populaires et bien plus encore. Découvrez comment vos contributions et vos achats contribuent à la mode durable et à la réduction des déchets textiles.",
                        "analyticsbtn": "ANALYTIQUES"
                    },

                    "Navbar": {
                        "Donate": "Donner",
                        "Items": "Articles",
                        "Analytics": "Analytiques",
                        "AboutUs": "À Propos de Nous",
                        "FAQReviews": "FAQ et Avis",
                        "Contact": "Nous Contacter",
                    },

                     "Footer": {
                        "Phone": "Téléphone",
                        "Email": "Courriel",
                        "Rights": "Tous Droits Réservés",
                    }
                }
            }
        },
        lng: "English", // if you're using a language detector, do not define the lng option
        fallbackLng: "English",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });



export default i18n;  