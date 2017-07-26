var materias= [
    {
        "id": "241",
        "materia": "Análisis Matemático I",
        "depto.": "M",
        "vh": "6",
        "requisitos": ["0"]
    },
    {
        "id": "242",
        "materia": "Economía",
        "depto.": "E",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "243",
        "materia": "Sociología",
        "depto.": "H",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "244",
        "materia": "Metodología de las Ciencias Sociales",
        "depto.": "H",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "245",
        "materia": "Álgebra",
        "depto.": "M",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "246",
        "materia": "Historia Económica y Social General",
        "depto.": "H",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "247",
        "materia": "Teoría Contable",
        "depto.": "C",
        "vh": "6",
        "requisitos": ["0"]
    },
    {
        "id": "248",
        "materia": "Estadística I",
        "depto.": "M",
        "vh": "6",
        "requisitos": ["241"]
    },
    {
        "id": "249",
        "materia": "Historia Económica y Social Argentina",
        "depto.": "H",
        "vh": "4",
        "requisitos": ["242","244","246"]
    },
    {
        "id": "250",
        "materia": "Microeconomía I",
        "depto.": "E",
        "vh": "4",
        "requisitos": ["241","242"]
    },
    {
        "id": "251",
        "materia": "Instituciones de Derecho Público",
        "depto.": "D",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "252",
        "materia": "Administración General",
        "depto.": "A",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "273",
        "materia": "Instituciones de Derecho Privado",
        "depto.": "D",
        "vh": "4",
        "requisitos": ["0"]
    },
    {
        "id": "274",
        "materia": "Sistemas Administrativos",
        "depto.": "A",
        "vh": "4",
        "requisitos": ["252"]
    },
    {
        "id": "275",
        "materia": "Tecnología de la Información",
        "depto.": "S",
        "vh": "6",
        "requisitos": ["274"]
    },
    {
        "id": "276",
        "materia": "Cálculo Financiero",
        "depto.": "M",
        "vh": "4",
        "requisitos": ["248"]
    },
    {
        "id": "277",
        "materia": "Gestión y Costos",
        "depto.": "C",
        "vh": "6",
        "requisitos": ["247"]
    },
    {
        "id": "278",
        "materia": "Macroeconomía y Política Económica",
        "depto.": "E",
        "vh": "6",
        "requisitos": ["250"]
    },
    {
        "id": "279",
        "materia": "Administración Financiera",
        "depto.": "A",
        "vh": "6",
        "requisitos": ["252","276"]
    },
    {
        "id": "451",
        "materia": "Estadística para Administradores",
        "depto.": "M",
        "vh": "4",
        "requisitos": ["248","274","275"]
    },
    {
        "id": "452",
        "materia": "Sociología de la Organización",
        "depto.": "H",
        "vh": "4",
        "requisitos": ["243","244","252"]
    },
    {
        "id": "453",
        "materia": "Administración de la Producción",
        "depto.": "A",
        "vh": "6",
        "requisitos": ["252","276"]
    },
    {
        "id": "454",
        "materia": "Administración del Personal",
        "depto.": "A",
        "vh": "6",
        "requisitos": ["273","452"]
    },
    {
        "id": "455",
        "materia": "Régimen Tributario",
        "depto.": "T",
        "vh": "6",
        "requisitos": ["273","277","278"]
    },
    {
        "id": "456",
        "materia": "Comercialización",
        "depto.": "A",
        "vh": "6",
        "requisitos": ["277","279","453","454"]
    },
    {
        "id": "457",
        "materia": "Teoría de la Decisión",
        "depto.": "A",
        "vh": "6",
        "requisitos": ["277","451"]
    },
    {
        "id": "458",
        "materia": "Planeamiento a Largo Plazo",
        "depto.": "A",
        "vh": "4",
        "requisitos": ["457"]
    },
    {
        "id": "459",
        "materia": "Dirección General",
        "depto.": "A",
        "vh": "6",
        "requisitos": ["279","453","454","456","457"]
    },
    {
        "id": "#",
        "materia": "(*) ELECTIVA u (**) OPTATIVA",
        "depto.": "0",
        "vh": "0",
        "requisitos": ["0"]
    },
    {
        "id": "#",
        "materia": "(*) ELECTIVA u (**) OPTATIVA",
        "depto.": "0",
        "vh": "0",
        "requisitos": ["0"]
    },
    {
        "id": "460",
        "materia": "Seminario de Integración y Aplicación",
        "depto.": "A",
        "vh": "0",
        "requisitos": ["456-457"]
    },
  
]
