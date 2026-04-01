"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Copy, Check, SlidersHorizontal } from "lucide-react";

interface Column {
    key: string;
    header: string;
}

interface ProductTableProps {
    columns: Column[];
    data: Record<string, any>[];
    grades: string[];
}

export function ProductTable({ columns, data, grades }: ProductTableProps) {
    const [activeGrade, setActiveGrade] = useState<string>(grades[0] || "304");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    // Filter the data based on grade if available
    const filteredData = data.filter((item) => !item.grade || item.grade === activeGrade);

    const handleCopy = (row: Record<string, any>, index: number) => {
        const text = Object.values(row).join(" | ");
        navigator.clipboard.writeText(`Kalite: ${activeGrade} -> ${text}`);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="space-y-6 animate-fade-in-up">
            {/* Quality Grade Filter */}
            {grades.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center bg-white p-4 rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
                    <div className="flex items-center text-sm font-semibold text-slate-500 mr-2">
                        <SlidersHorizontal className="w-4 h-4 mr-2 text-red-500" />
                        Kalite Seçimi:
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {grades.map((grade) => (
                            <button
                                key={grade}
                                onClick={() => setActiveGrade(grade)}
                                className={`relative px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden ${activeGrade === grade
                                    ? "text-white shadow-md shadow-red-500/20 scale-105"
                                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                    }`}
                            >
                                {activeGrade === grade && (
                                    <div className="absolute inset-0 bg-red-600 rounded-xl z-0"></div>
                                )}
                                <span className="relative z-10">AISI {grade}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Modern Table */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50 border-b border-slate-200">
                        <TableRow className="hover:bg-transparent">
                            {columns.map((col) => (
                                <TableHead key={col.key} className="font-bold text-slate-700 py-4">
                                    {col.header}
                                </TableHead>
                            ))}
                            <TableHead className="text-right font-bold text-slate-700 py-4">Hızlı Kopyala</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((row, i) => (
                                <TableRow key={i} className="hover:bg-red-50/50 transition-colors group">
                                    {columns.map((col) => (
                                        <TableCell key={col.key} className="text-slate-700 py-4 font-medium">
                                            {row[col.key]}
                                        </TableCell>
                                    ))}
                                    <TableCell className="text-right py-4">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleCopy(row, i)}
                                            className={`transition-colors rounded-lg ${copiedIndex === i ? "bg-green-50 text-green-600 hover:bg-green-100" : "text-slate-400 hover:text-red-600 hover:bg-red-100 group-hover:border-red-200"}`}
                                            title="Ölçüyü Kopyala"
                                        >
                                            {copiedIndex === i ? (
                                                <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Kopyalandı</span>
                                            ) : (
                                                <Copy className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length + 1} className="text-center py-12 text-slate-500">
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="text-4xl mb-3">🔍</span>
                                        <span className="font-medium text-lg">Bu kalite sınıfı için kayıt bulunamadı.</span>
                                        <span className="text-sm mt-1">Lütfen farklı bir kalite sınıfı seçin veya bizimle iletişime geçin.</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
