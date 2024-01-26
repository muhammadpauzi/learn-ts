interface HasName {
    name: string;
}

interface HasID {
    id: number;
}

// interface Person extends HasName, HasID {}

// or

type Personn = HasName & HasID;

const person2: Personn = {
    id: 123,
    name: "person2"
}