export interface Config {
  port: number;
  database: {
    url: string;
  };
}

export default (): Config => ({
  // Számmá alakítjuk a portot, ha nem sikerül, 3000 lesz az alapértelmezett
  port: parseInt(process.env.PORT || '3000', 10) || 3000,
  database: {
    url: process.env.DATABASE_URL || 'file:./dev.db',
  },
});
