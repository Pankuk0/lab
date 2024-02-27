// utils/database.ts

/**
 * Simula una consulta a la base de datos vulnerable a inyección SQL
 * ADVERTENCIA: Este código es solo para fines de demostración. No usar en producción.
 */
export const unsafeQuery = (userInput: string) => {
    const query = `SELECT * FROM users WHERE username = '${userInput}'`; // Vulnerable a inyección SQL
    console.log(`Ejecutando consulta: ${query}`);
    // Aquí se simularía la ejecución de la consulta
};
