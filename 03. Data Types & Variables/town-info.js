function townInfo(name, population, area) {
    let townName = name;
    let townPopulation = parseInt(population);
    let townArea = parseFloat(area);

    console.log(`Town ${townName} has population of ${townPopulation} and area ${townArea} square km.`);
}

townInfo('Sofia', '1286383', '492');