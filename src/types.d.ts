interface Table {
    data: { id: number | string, body: string, title: string }[],
    columns: {
        title: string;
        dataIndex: string;
        key: string
    }[],
    handleDelete?: (id: number) => void
}

interface Link {
    link :{
        title: string;
        url: string;
        iconSrc: string
    }
}


export interface Customer {
    id: string;
    name: string;
    email: string;
    number: string;
    licenseId: string;
    registrationDate: string;
    subscriptionType: 'Standard' | 'VIP';
    walletBalance: string;
    avatar: string;
  }