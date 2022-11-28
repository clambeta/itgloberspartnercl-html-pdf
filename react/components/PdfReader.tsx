import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
    pdfUrl: string,
    width: number,
    height: number
}

const PdfReader = ({ pdfUrl, width, height }: Props) => {
    const CSS_HANDLES = ["pdfContainer", "pdfContent", "iFrameContainer"]
    const handles = useCssHandles(CSS_HANDLES)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        mounted && (
            <div className='flex justify-center'>
                <div className={handles.pdfContainer}>
                    <object className={handles.pdfContent}
                        data={pdfUrl}
                        type="aplication/pdf"
                        width={width}
                        height={height}
                    >
                        <iframe className={handles.iFrameContainer} title="PDF" src={pdfUrl} width={width} height={height}>
                            <p>Este navegador no soporta PDF</p>
                        </iframe>
                    </object>
                </div>
            </div>
        )
    )
}

export default PdfReader