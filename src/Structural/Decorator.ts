// Decorator pattern allows you to add new behavior to an existing object without modify the class of the object
// Useful to respect the open/closed principle, to avoid modifying the existing code that was tested and known to work

// Example replica from: https://refactoring.guru/design-patterns/decorator

interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

// This is the base class that we want to decorate
class FileDataSource implements DataSource {
  constructor(private filename: string) {}
  writeData(data: string): void {
    console.log(`Writing data to ${this.filename}`);
  }
  readData(): string {
    console.log(`Reading data from ${this.filename}`);
    return "";
  }
}

// This is the decorator parent class, that will be extended by the concrete decorators
abstract class DataSourceDecorator implements DataSource {
  constructor(private wrappee: DataSource) {}

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }
  readData(): string {
    return this.wrappee.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    console.log("Encrypting data");
    super.writeData(data);
  }
  readData(): string {
    const encryptedData = super.readData();
    console.log("Decrypting data");
    const decryptedData = encryptedData;
    return decryptedData;
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    console.log("Compressing data");
    super.writeData(data);
  }
  readData(): string {
    const compressedData = super.readData();
    console.log("Decompressing data");
    const decompressedData = compressedData;
    return decompressedData;
  }
}

const source = new FileDataSource("data.txt");

const encryptedSource = new EncryptionDecorator(source);
const compressedEncryptedSource = new CompressionDecorator(encryptedSource);

encryptedSource.writeData("data");

encryptedSource.readData();
