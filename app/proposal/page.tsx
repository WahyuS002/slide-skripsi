"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import LiteratureReviewPage from "./_components/literature-review";
import IntroductionPage from "./_components/introduction";
import MethodologyPage from "./_components/methodology";
import logoUnib from "@/assets/images/logo-unib.png";
import Image from "next/image";

const content = [
    {
        title: "Lama Studi Mahasiswa",
        description:
            "Lama studi mahasiswa merupakan indikator kunci kualitas pendidikan tinggi dan menjadi kriteria penting dalam penilaian akreditasi oleh BAN-PT. Ketepatan waktu kelulusan mencerminkan efektivitas sistem pendidikan dan kinerja institusi.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
                Lama Studi Mahasiswa
            </div>
        ),
    },
    {
        title: "Masalah Keterlambatan Kelulusan",
        description:
            "Tingkat kelulusan tepat waktu di banyak perguruan tinggi masih di bawah 50%. Hal ini berdampak negatif pada efisiensi sistem pendidikan, ekonomi mahasiswa, dan reputasi institusi, serta menyebabkan penumpukan mahasiswa.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
                Masalah Keterlambatan Kelulusan
            </div>
        ),
    },
    {
        title: "Keterbatasan Solusi Konvensional",
        description:
            "Sistem bimbingan akademik konvensional sering kali kurang efektif dalam mengatasi masalah keterlambatan kelulusan. Kendala seperti beban kerja dosen yang tinggi dan waktu pertemuan yang terbatas mengurangi efektivitas bimbingan.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--green-500))] flex items-center justify-center text-white">
                Keterbatasan Solusi Konvensional
            </div>
        ),
    },
    {
        title: "Pendekatan Baru: Machine Learning",
        description:
            "Penggunaan machine learning, khususnya Jaringan Syaraf Tiruan (JST), menawarkan pendekatan baru yang menjanjikan untuk memprediksi lama studi mahasiswa dengan lebih akurat.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
                Pendekatan Baru: Machine Learning
            </div>
        ),
    },
    {
        title: "Fokus Penelitian",
        description:
            "Penelitian ini berfokus pada pengembangan sistem prediksi menggunakan JST dengan algoritma backpropagation, optimalisasi parameter JST, dan integrasi data e-learning untuk meningkatkan akurasi prediksi.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                Fokus Penelitian
            </div>
        ),
    },
    {
        title: "Tujuan Penelitian",
        description:
            "Tujuan utama penelitian ini adalah meningkatkan akurasi prediksi lama studi, memungkinkan identifikasi dini mahasiswa berisiko, dan memfasilitasi intervensi tepat waktu untuk meningkatkan tingkat kelulusan tepat waktu.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
                Tujuan Penelitian
            </div>
        ),
    },
    {
        title: "Signifikansi Penelitian",
        description:
            "Penelitian ini berkontribusi pada pengembangan sistem prediksi berbasis e-learning dan berpotensi meningkatkan efisiensi pendidikan tinggi secara keseluruhan, memberikan landasan untuk penelitian lanjutan dalam analisis data pendidikan.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
                Signifikansi Penelitian
            </div>
        ),
    },
];
export default function ProposalPage() {
    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                {pageParam === "home" && (
                    <div className="pb-40 space-y-5 max-w-4xl">
                        <div className="space-y-10">
                            <div className="flex justify-center">
                                <Image src={logoUnib} alt="Logo Unib" className="size-56" />
                            </div>
                            <h1 className="text-5xl font-black text-center">
                                Sistem Prediksi Lama Studi Mahasiswa Menggunakan Metode Jaringan Syaraf Tiruan
                            </h1>
                        </div>
                        <p className="text-center text-xl font-medium text-zinc-400">Wahyu Syahputra (G1A018093)</p>
                    </div>
                )}
                {pageParam === "pendahuluan" && (
                    <div className="pb-40 space-y-9">
                        <p className="text-5xl font-black text-center">Pendahuluan</p>
                        <div className="bg-white border border-zinc-200 rounded-md">
                            <IntroductionPage content={content} />
                        </div>
                    </div>
                )}
                {pageParam === "literature-review" && (
                    <div className="pb-40 space-y-20">
                        <p className="text-5xl font-black text-center">Literature Review</p>
                        <LiteratureReviewPage />
                    </div>
                )}
                {pageParam === "metodologi" && (
                    <div className="pb-40 space-y-20">
                        <p className="text-5xl font-black text-center">Metodologi</p>
                        <MethodologyPage />
                    </div>
                )}
            </div>
            <Navigation />
        </div>
    );
}

function Navigation() {
    return (
        <ul className="absolute flex items-center bottom-20 left-1/2 -translate-x-1/2 space-x-3">
            <Link className="bg-white p-2 border border-zinc-200 rounded-md" href="?page=home">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            </Link>
            <Link className="bg-white border border-400 px-4 py-2 rounded-md" href="?page=pendahuluan">
                Pendahuluan
            </Link>
            <Link className="bg-white border border-400 px-4 py-2 rounded-md" href="?page=literature-review">
                Literature Review
            </Link>
            <Link className="bg-white border border-400 px-4 py-2 rounded-md" href="?page=metodologi">
                Metodologi
            </Link>
        </ul>
    );
}
