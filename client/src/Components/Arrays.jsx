const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
const Years = range(2009, currentYear, 1);
const joiningYears = Years.map(year => {return {label: year, value: year}});
const graduateYears = range(2009, currentYear+5, 1).map(year => {return {label: year, value: year}});
const departments = [
    { label: 'Computer Science Engineering', value: 'Computer Science Engineering'},
    { label: 'Electrical Engineering', value: 'Electrical Engineering'},
    { label: 'Mechanical Engineering', value: 'Mechanical Engineering'},
    { label: 'Civil Engineering', value: 'Civil Engineering'},
    { label: 'Chemistry', value: 'Chemistry'},
    { label: 'Metallurgy Engineering and Materials Science', value: 'Metallurgy Engineering and Materials Science'},
    { label: 'VLSI Design and Nanoelectronics', value: 'VLSI Design and Nanoelectronics'},
    { label: 'Biosciences and Bioengineering', value: 'Biosciences and Bioengineering'},
    { label: 'Biosciences and Biomedical Engineering', value: 'Biosciences and Biomedical Engineering'},
    { label: 'HSS', value: 'HSS'},
    { label: 'Production and Industrial Engineering', value: 'Production and Industrial Engineering'},
    { label: 'Communication and Signal Processing', value: 'Communication and Signal Processing'},
    { label: 'Materials Science and Engineering', value: 'Materials Science and Engineering'},
    { label: 'Psychology', value: 'Psychology'},
    { label: 'Philosophy', value: 'Philosophy'},
    { label: 'Economics', value: 'Economics'},
    { label: 'Mathematics', value: 'Mathematics'},
    { label: 'Physics', value: 'Physics'},
    { label: 'Astronomy Astrophysics and Space Engineering', value: 'Astronomy Astrophysics and Space Engineering'}
];
const courses = [
    { label: 'B.Tech.',value: 'B.Tech.'},
    { label: 'M.Tech.', value: 'M.Tech.'},
    { label: 'M.Sc.', value: 'M.Sc.'},
    { label: 'Ph.D.', value: 'Ph.D.'},
    { label: 'MS (Research)', value: 'MS (Research)'}
];

export {joiningYears, graduateYears, departments, courses};