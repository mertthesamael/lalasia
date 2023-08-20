

export const SlideArrow = ({className,stroke}:{className?:string, stroke?:string}) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" className={className} viewBox="0 0 24 24" fill="none">
        <path d="M15.0898 19.92L8.56984 13.4C7.79984 12.63 7.79984 11.37 8.56984 10.6L15.0898 4.08" stroke={stroke?stroke:"white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const SlideArrowSecondary = ({className, stroke}:{className?:string, stroke:string}) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className={className} viewBox="0 0 28 28" fill="none">
        <path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.0835 14H23.7185" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}