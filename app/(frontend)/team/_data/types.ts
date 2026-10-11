export type Exec = {
    name: string;
    role: string;
    image: string;
};

export type Member = {
    name: string;
    role: string;
};

export type Department = {
    name: string;
    description: string;
    image: string;
    members: Member[];
};

export type TeamYear = {
    execs: Exec[];
    departments: Department[];
};
