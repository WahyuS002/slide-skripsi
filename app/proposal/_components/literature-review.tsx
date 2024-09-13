import { generateGradient } from "@/lib/utils";
import { useState } from "react";
import { PanInfo, motion } from "framer-motion";

const initialCards = [
    {
        number: 5,
        zIndex: 0,
        color: generateGradient(280),
        translateX: -20,
        scale: 0.8,
        title: "Penerapan Jaringan Saraf Tiruan Dengan Metode Backpropagation Untuk Memprediksi Tingkat Kelulusan Mahasiswa Perguruan Tinggi",
        description:
            "Menggunakan JST dengan algoritma backpropagation untuk memprediksi tingkat kelulusan mahasiswa. Menggunakan data 5 tahun terakhir, model JST dengan arsitektur 5-10-1 berhasil memprediksi tingkat kelulusan dengan akurasi 93% dan MSE 0.177.",
    },
    {
        number: 4,
        zIndex: 1,
        color: generateGradient(325),
        translateX: -40,
        scale: 0.8,
        title: "Perbandingan K-Nearest Neighbor dan Random Forest dengan Seleksi Fitur Information Gain untuk Klasifikasi Lama Studi Mahasiswa",
        description:
            "Penelitian ini membandingkan metode K-Nearest Neighbor (K-NN) dan Random Forest dengan seleksi fitur Information Gain untuk mengklasifikasikan lama studi mahasiswa. Hasil menunjukkan Random Forest memiliki akurasi lebih tinggi (98,76%) dibandingkan K-NN (86,67%).",
    },
    {
        number: 3,
        zIndex: 2,
        color: generateGradient(0),
        translateX: -60,
        scale: 0.8,
        title: "Perbandingan Tingkat Akurasi Metode KNN Dan Decision Tree Dalam Memprediksi Lama Studi Mahasiswa",
        description:
            "Membandingkan akurasi metode KNN dan Decision Tree dalam memprediksi lama studi mahasiswa. Menggunakan data 260 mahasiswa dengan 9 atribut, hasil menunjukkan Decision Tree memiliki akurasi lebih tinggi (60,38%) dibandingkan KNN (53,08%).",
    },
    {
        number: 2,
        zIndex: 3,
        color: generateGradient(400),
        translateX: -100,
        scale: 0.9,
        title: "Deteksi Awal Kelulusan Mahasiswa Dengan Algoritma Jaringan Syaraf Tiruan Dan Information Gain",
        description:
            "Mengkombinasikan JST dan Information Gain untuk memprediksi kelulusan mahasiswa. Information Gain digunakan untuk memilih atribut paling berpengaruh, sementara JST untuk klasifikasi. Hasil menunjukkan kombinasi ini menghasilkan akurasi sedikit lebih tinggi (59%-88%) dibanding hanya JST (55%-85%)",
    },
    {
        number: 1,
        zIndex: 4,
        color: generateGradient(250),
        translateX: -140,
        scale: 1,
        title: "Prediksi Lama Masa Studi Mahasiswa Program Studi Matematika Berdasarkan IPK",
        description:
            "Menggunakan satu variabel prediktor (IPK) dengan metode Regresi Linear dengan kesimpulan IPK berpengaruh signifikan terhadap lama studi.",
    },
];

export default function LiteratureReviewPage() {
    const [cards, setCards] = useState(initialCards);

    const onDragEnd = (_e: any, info: PanInfo) => {
        if (info.offset.x < -100) {
            setCards((prev) => {
                const newCards = prev.map((card, index, array) => {
                    if (index === array.length - 1) {
                        // The last card gets the properties of the first card
                        return {
                            ...card,
                            zIndex: array[0].zIndex,
                            translateX: array[0].translateX,
                            scale: array[0].scale,
                        };
                    } else {
                        // Other cards get the properties of the next card
                        return {
                            ...card,
                            zIndex: array[index + 1].zIndex,
                            translateX: array[index + 1].translateX,
                            scale: array[index + 1].scale,
                        };
                    }
                });
                return newCards;
            });
        }
    };

    return (
        <div className="relative grid ml-40">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={onDragEnd}
                    className="h-[520px] w-[350px] cursor-pointer rounded-xl border-4 border-zinc-800 shadow-2xl active:cursor-grabbing p-4 text-white"
                    style={{
                        background: card.color,
                        gridArea: "1/1/auto/4",
                    }}
                    animate={{
                        translateX: card.translateX,
                        rotate: `${
                            card.zIndex % 2 === 0 ? card.zIndex - 1 * card.zIndex : card.zIndex + 1 * card.zIndex
                        }deg`,
                        zIndex: card.zIndex,
                        scale: card.scale,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <div className="flex flex-col justify-between items-center h-full">
                        <div>
                            <p className="font-semibold text-2xl">{card.title}</p>
                            <p className="text-sm mt-8 text-zinc-100">{card.description}</p>
                        </div>
                        <div className="size-8 bg-zinc-800 rounded-full flex justify-center items-center">
                            <span>{card.number}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
