'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';

interface MdxRendererProps {
    content: string;
}

export default function MdxRenderer({ content }: MdxRendererProps) {
    return (
        <MDXProvider
            components={{
                wrapper: ({ children }) => <div className="mdx-content">{children}</div>,
            }}
        >
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </MDXProvider>
    );
}
