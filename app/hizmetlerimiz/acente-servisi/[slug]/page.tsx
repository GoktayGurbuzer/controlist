import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MdxRenderer from '@/app/components/MdxRenderer'; // Yeni oluşturduğunuz bileşeni içe aktarın

interface Props {
    params: { slug: string };
}

export default async function Page({ params }: Props) {
    const { slug } = params;

    // MDX dosyasını oku
    const filePath = path.join(process.cwd(), 'content', 'acente-servisi', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Meta verileri ve MDX içeriğini ayrıştır
    const { content, data } = matter(fileContent);

    return (
        <>
            <div className="prt-page-title-row">
                <div className="prt-page-title-row-inner">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="prt-page-title-row-heading">
                                        <div className="page-title-heading">
                                            <h2 className="title">{data.title}</h2>
                                        </div>
                                        <div className="breadcrumb-wrapper">
                                            <span>
                                                <a title="Anasayfa" href="/">Anasayfa </a>
                                            </span>
                                            <span>
                                                <a title="Acente Servisi" href="/hizmetlerimiz/acente-servisi">Acente Servisi </a>
                                            </span>
                                            <span className="action">{data.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1></h1>
            <MdxRenderer content={content}/>
        </>
    );
}
