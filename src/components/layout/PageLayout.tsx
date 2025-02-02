import React from 'react'

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
    return (
        <div className="bg-[#0D0D0D] min-h-screen flex-col text-white" >
            {props.children}
        </div>
    )
}
