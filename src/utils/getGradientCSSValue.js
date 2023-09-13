export default function getGradientCSSValue(gradient) {
    // On retourne l'accumulateur qui retourne une chaine de caractères vides par défaut puis pour chaque couleur on ajoute la couleur et sa position
    const gradientValues = gradient.colors.reduce((acc, obj, index) => acc + `${obj.value} ${obj.position}%${index + 1 !== gradient.colors.length ? "," : ""}`, "") // après le % c'est est-ce que je me trouve à la dernière couleur si oui je ne retourne rien sinon je retourne une ","
    return `linear-gradient(${gradient.angle}deg,${gradientValues});`
}