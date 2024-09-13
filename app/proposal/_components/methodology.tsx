"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy, IconFileBroken } from "@tabler/icons-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import metodeCrispDM from "@/assets/images/crisp-dm-overview.jpg";
import Image from "next/image";

export default function MethodologyPage() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[5rem]">
            {items.map((item, i) => (
                <Dialog>
                    <DialogTrigger>
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            className={cn("[&>p:text-lg] cursor-pointer", item.className)}
                            icon={item.icon}
                        />
                    </DialogTrigger>
                    <Content itemId={item.id} />
                </Dialog>
            ))}
        </BentoGrid>
    );
}

function Content({ itemId }: { itemId: string }) {
    return (
        <>
            {itemId === "metode-pengumpulan-data" && (
                <DialogContent>
                    <DialogHeader className="space-y-12">
                        <DialogTitle>Metode Pengumpulan Data</DialogTitle>
                        <DialogDescription className="grid grid-cols-2 gap-5">
                            <div className="bg-zinc-100 rounded-md flex flex-col items-center justify-center p-10 border border-zinc-400 space-y-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-8"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                    />
                                </svg>
                                <div className="text-lg">PANDA UNIB</div>
                            </div>
                            <div className="bg-zinc-100 rounded-md flex flex-col items-center justify-center p-10 border border-zinc-400 space-y-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-8"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                    />
                                </svg>
                                <div className="text-lg">E-LEARNING</div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            )}
            {itemId === "disain-penelitian" && (
                <DialogContent className="min-w-[700px]">
                    <DialogHeader className="space-y-12">
                        <DialogTitle>Disain Penelitian (Metode CRISP-DM)</DialogTitle>
                        <DialogDescription className="max-h-[500px] overflow-y-auto">
                            <div className="bg-zinc-100 rounded-md flex flex-col items-center justify-center p-10 border border-zinc-400 space-y-3">
                                <Image src={metodeCrispDM} alt="Image for Metode CRISP-DM" />
                                <article className="prose">
                                    <ul>
                                        <li>
                                            <span className="font-semibold">Pemahaman Bisnis</span>
                                            <ul>
                                                <li>Definisikan tujuan sistem prediksi</li>
                                                <li>Wawancara pemangku kepentingan</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Pemahaman Data</span>
                                            <ul>
                                                <li>Eksplorasi dataset akademik</li>
                                                <li>Analisis statistik dan visualisasi</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Persiapan Data</span>
                                            <ul>
                                                <li>Bersihkan dan normalisasi data</li>
                                                <li>Lakukan rekayasa fitur</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Pemodelan</span>
                                            <ul>
                                                <li>Implementasi Jaringan Syaraf Tiruan</li>
                                                <li>Eksperimen arsitektur dan parameter</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Evaluasi</span>
                                            <ul>
                                                <li>Nilai performa model (MAE, RMSE, R²)</li>
                                                <li>Bandingkan dengan metode lain</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Implementasi</span>
                                            <ul>
                                                <li>Integrasi model ke sistem informasi</li>
                                                <li>Kembangkan antarmuka pengguna</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            )}
        </>
    );
}

const items = [
    {
        id: "metode-pengumpulan-data",
        title: "Metode Pengumpulan Data",
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        id: "disain-penelitian",
        title: "Disain Penelitian",
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
];
