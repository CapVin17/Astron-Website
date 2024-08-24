import React from "react";
import HamSheet from "@/components/header/subcomponents/hamsheet";

export default function Hambar() {
    return (
        <>
            <div className="flex items-center justify-end md:hidden lg:hidden xl:hidden 2xl:hidden">
                <HamSheet />
            </div>
        </>
    );
}