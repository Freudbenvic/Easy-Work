/**
 * Simule un traitement IA côté client, le temps que le backend Django +
 * moteur IA (Phase 5 du cahier des charges) soit branché.
 *
 * À terme, cette fonction sera remplacée par un appel Axios vers l'API :
 *   POST /api/processing/background-removal/  (multipart: image)
 * qui renverra l'URL du fichier résultat.
 */
export function simulateBackgroundRemoval(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  return new Promise((resolve) => {
    setTimeout(() => resolve(url), 1600);
  });
}
