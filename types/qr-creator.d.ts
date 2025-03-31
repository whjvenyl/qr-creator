// Type definitions for qr-creator
// Project: qr-creator
// Definitions by: Nimiq <www.nimiq.com>

declare class QrCreator {
  public static render(config: QrCreator.Config, $element: HTMLElement): void;
}

// exported types
declare namespace QrCreator {
  export interface Config {
    /** version range somewhere in 1 .. 40 */
    minVersion?: number;
    maxVersion?: number;

    /** error correction level: 'L', 'M', 'Q' or 'H' */
    ecLevel?: QrCreator.ErrorCorrectionLevel;
    
    /** offset in pixel if drawn onto existing canvas */
    left?: number;
    top?: number;

    /** size in pixel */
    size?: number;
    
    /** code color or gradient */
    fill?: string | QrCreator.LinearGradient | QrCreator.RadialGradient;
    /** background color, null for transparent background */
    background?: string | null;
    
    /** content */
    text: string;
    
    /** corner radius relative to module width: 0.0 .. 0.5 */
    radius?: number;
    
    /** quiet zone in modules */
    quiet?: number;

    /** center icon configuration */
    icon?: {
        src: string | null;     // URL or Data URL of the icon
        width?: number;         // Optional width in pixels
        height?: number;        // Optional height in pixels
        };
  }

  export type ErrorCorrectionLevel = 'L' | 'M' | 'H' | 'Q';

  export interface LinearGradient {
    type: 'linear-gradient';
    position: [number, number, number, number];
    colorStops: Array<QrCreator.ColorStop>;
  }

  export interface RadialGradient {
    type: 'radial-gradient';
    position: [number, number, number, number, number, number];
    colorStops: Array<QrCreator.ColorStop>;
  }

  export type ColorStop = [number, string];
}

export default QrCreator;
