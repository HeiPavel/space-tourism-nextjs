type Params = {
    params: {
        article: string
    }
}

export default function Page({params} : Params) {
    return (
        <h2 style={{color: 'white'}}>{params.article}</h2>
    );
}