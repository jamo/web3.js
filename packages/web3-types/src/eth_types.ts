/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
import { Bytes, HexString, Numbers } from './primitives_types';

export type ValueTypes = 'address' | 'bool' | 'string' | 'int256' | 'uint256' | 'bytes' | 'bigint';
// Hex encoded 32 bytes
export type HexString32Bytes = HexString;
// Hex encoded 16 bytes
export type HexString16Bytes = HexString;
// Hex encoded 8 bytes
export type HexString8Bytes = HexString;
// Hex encoded 1 byte
export type HexStringSingleByte = HexString;
// Hex encoded 1 byte
export type HexStringBytes = HexString;
// Hex encoded 256 byte
export type HexString256Bytes = HexString;
// Hex encoded unsigned integer
export type Uint = HexString;
// Hex encoded unsigned integer 32 bytes
export type Uint256 = HexString;
// Hex encoded address
export type Address = HexString;

// https://github.com/ethereum/execution-apis/blob/main/src/schemas/filter.json#L59
export type Topic = HexString32Bytes;

export type TransactionHash = HexString;
export type Uncles = HexString32Bytes[];
export enum BlockTags {
	EARLIEST = 'earliest',
	LATEST = 'latest',
	PENDING = 'pending',
	SAFE = 'safe',
	FINALIZED = 'finalized',
}
export type BlockTag = `${BlockTags}`;

export type BlockNumberOrTag = Numbers | BlockTag;

export interface Proof {
	readonly address: HexString;
	readonly nonce: string;
	readonly balance: string;
}

export interface TransactionInput {
	readonly [key: string]: unknown;
	readonly to?: HexString; // If its a contract creation tx then no address wil be specified.
	readonly from?: HexString;
	readonly data?: string;
	readonly input?: string;
	readonly gas: HexString;
	readonly gasLimit?: string;
	readonly gasPrice?: string;
	readonly maxPriorityFeePerGas?: string;
	readonly maxFeePerGas?: string;
	readonly nonce: string;
	readonly value: string;
	readonly blockNumber?: HexString;
	readonly transactionIndex?: HexString;
	readonly type?: HexString;
	readonly chainId?: HexString;
}

export type TransactionOutput = {
	readonly [key: string]: unknown;
	readonly to?: HexString; // If its a contract creation tx then no address wil be specified.
	readonly from?: HexString;
	readonly input: string;
	readonly gas?: Numbers;
	readonly gasLimit?: string;
	readonly nonce: Numbers;
	readonly value: Numbers;
	readonly blockNumber?: Numbers;
	readonly transactionIndex?: Numbers;
} & (
	| { maxPriorityFeePerGas: Numbers; maxFeePerGas: Numbers; gasPrice?: never }
	| { maxPriorityFeePerGas?: never; maxFeePerGas?: never; gasPrice: Numbers }
);

export interface LogsInput {
	readonly blockHash?: HexString;
	readonly transactionHash?: HexString;
	readonly logIndex?: HexString;
	readonly id?: string;
	readonly blockNumber?: HexString;
	readonly transactionIndex?: HexString;
	readonly address: HexString;
	readonly topics: HexString[];
	readonly data: HexString;
}
export interface LogsOutput {
	readonly id?: string;
	readonly removed: boolean;
	readonly logIndex?: Numbers;
	readonly transactionIndex?: Numbers;
	readonly transactionHash?: HexString32Bytes;
	readonly blockHash?: HexString32Bytes;
	readonly blockNumber?: Numbers;
	readonly address: string;
	readonly topics: HexString[];
	readonly data: HexString;
}

export interface BlockInput {
	readonly gasLimit: HexString;
	readonly gasUsed: HexString;
	readonly size: HexString;
	readonly timestamp: HexString;
	readonly number?: HexString;
	readonly difficulty?: HexString;
	readonly totalDifficulty?: HexString;
	readonly transactions?: TransactionInput[];
	readonly miner?: HexString;
	readonly baseFeePerGas?: HexString;
}

export interface BlockOutput {
	readonly gasLimit: bigint | number;
	readonly gasUsed: bigint | number;
	readonly size: bigint | number;
	readonly timestamp: bigint | number;
	readonly number?: bigint | number;
	readonly difficulty?: bigint | number;
	readonly totalDifficulty?: bigint | number;
	readonly transactions?: TransactionOutput[];
	readonly miner?: HexString;
	readonly baseFeePerGas?: bigint | number;
	readonly parentHash?: HexString32Bytes;
}

export interface BlockHeaderOutput {
	readonly gasLimit: Numbers;
	readonly gasUsed: Numbers;
	readonly timestamp: Numbers;
	readonly number?: Numbers;
	readonly difficulty?: Numbers;
	readonly totalDifficulty?: Numbers;
	readonly transactions?: TransactionOutput[];
	readonly miner?: HexString;
	readonly baseFeePerGas?: Numbers;
	readonly parentHash?: HexString32Bytes;
	readonly sha3Uncles: HexString32Bytes[];
}

export interface ReceiptInput {
	readonly [x: string]: unknown;
	readonly blockNumber?: HexString;
	readonly transactionIndex?: HexString;
	readonly cumulativeGasUsed: HexString;
	readonly gasUsed: HexString;
	readonly logs?: LogsInput[];
	readonly contractAddress?: HexString;
	readonly status?: string;
	readonly effectiveGasPrice?: HexString;
}

export interface ReceiptOutput {
	readonly blockNumber?: bigint | number;
	readonly transactionIndex?: bigint | number;
	readonly cumulativeGasUsed: bigint | number;
	readonly gasUsed: bigint | number;
	readonly logs?: LogsOutput[];
	readonly contractAddress?: HexString;
	readonly status: boolean;
	readonly effectiveGasPrice?: bigint | number;
}

export interface PostInput {
	readonly ttl?: HexString;
	readonly workToProve?: HexString;
	readonly priority?: HexString;
	readonly expiry?: HexString;
	readonly sent?: HexString;
	readonly workProved?: HexString;
	readonly topics?: HexString[];
}

export interface PostOutput {
	readonly ttl?: bigint | number;
	readonly workToProve?: bigint | number;
	readonly priority?: bigint | number;
	readonly expiry?: bigint | number;
	readonly sent?: bigint | number;
	readonly workProved?: bigint | number;
	readonly topics?: string[];
}

export interface SyncInput {
	readonly startingBlock: HexString;
	readonly currentBlock: HexString;
	readonly highestBlock: HexString;
	readonly knownStates?: HexString;
	readonly pulledStates?: HexString;
}

export interface SyncOutput {
	readonly startingBlock: Numbers;
	readonly currentBlock: Numbers;
	readonly highestBlock: Numbers;
	readonly knownStates?: Numbers;
	readonly pulledStates?: Numbers;
}

export type Receipt = Record<string, unknown>;

type FilterOption = Record<string, Numbers | Numbers[] | boolean | boolean[]>;

// https://github.com/ethereum/execution-apis/blob/main/src/schemas/filter.json#L28
export interface Filter {
	readonly fromBlock?: BlockNumberOrTag;
	readonly toBlock?: BlockNumberOrTag;
	readonly address?: Address | Address[];

	// Using "null" type intentionally to match specifications
	// eslint-disable-next-line @typescript-eslint/ban-types
	readonly topics?: (null | Topic | Topic[])[];
	readonly filter?: FilterOption;
}

export interface AccessListEntry {
	readonly address?: Address;
	readonly storageKeys?: HexString32Bytes[];
}
export type AccessList = AccessListEntry[];

export type AccessListResult = {
	readonly accessList?: AccessList;
	readonly gasUsed?: Numbers;
};

export type ValidChains = 'goerli' | 'kovan' | 'mainnet' | 'rinkeby' | 'ropsten' | 'sepolia';

export type Hardfork =
	| 'arrowGlacier'
	| 'berlin'
	| 'byzantium'
	| 'chainstart'
	| 'constantinople'
	| 'dao'
	| 'homestead'
	| 'istanbul'
	| 'london'
	| 'merge'
	| 'muirGlacier'
	| 'petersburg'
	| 'shanghai'
	| 'spuriousDragon'
	| 'tangerineWhistle';

export interface LogBase<NumberType, ByteType> {
	readonly removed?: boolean;
	readonly logIndex?: NumberType;
	readonly transactionIndex?: NumberType;
	readonly transactionHash?: ByteType;
	readonly blockHash?: ByteType;
	readonly blockNumber?: NumberType;
	readonly address?: Address;
	readonly data?: ByteType;
	readonly topics?: ByteType[];
	readonly id?: string;
}
export interface Log extends LogBase<Numbers, Bytes> {
	readonly id?: string;
}
export interface TransactionReceiptBase<numberType, hashByteType, logsBloomByteType, logsType> {
	readonly transactionHash: hashByteType;
	readonly transactionIndex: numberType;
	readonly blockHash: hashByteType;
	readonly blockNumber: numberType;
	readonly from: Address;
	readonly to: Address;
	readonly cumulativeGasUsed: numberType;
	readonly gasUsed: numberType;
	readonly effectiveGasPrice?: numberType;
	readonly contractAddress?: Address;
	readonly logs: logsType[];
	readonly logsBloom: logsBloomByteType;
	readonly root: hashByteType;
	readonly status: numberType;
	readonly type?: numberType;
}

export type TransactionReceipt = TransactionReceiptBase<Numbers, Bytes, Bytes, Log>;

export interface CustomChain {
	name?: string;
	networkId: Numbers;
	chainId: Numbers;
}

export interface Common {
	customChain: CustomChain;
	baseChain?: ValidChains;
	hardfork?: Hardfork;
}

interface TransactionBase {
	value?: Numbers;
	accessList?: AccessList;
	common?: Common;
	gas?: Numbers;
	gasPrice?: Numbers;
	type?: Numbers;
	maxFeePerGas?: Numbers;
	maxPriorityFeePerGas?: Numbers;
	data?: Bytes;
	input?: Bytes;
	nonce?: Numbers;
	chain?: ValidChains;
	hardfork?: Hardfork;
	chainId?: Numbers;
	networkId?: Numbers;
	gasLimit?: Numbers;
	yParity?: Uint;
	v?: Numbers;
	r?: Bytes;
	s?: Bytes;
}

export interface Transaction extends TransactionBase {
	from?: Address;
	// eslint-disable-next-line @typescript-eslint/ban-types
	to?: Address | null;
}

export interface TransactionForAccessList extends Transaction {
	from: Address;
}

export interface TransactionCall extends Transaction {
	to: Address;
}

export interface TransactionWithFromLocalWalletIndex extends Omit<Transaction, 'from'> {
	from: Numbers;
}

export interface TransactionWithToLocalWalletIndex extends Omit<Transaction, 'to'> {
	to: Numbers;
}

export interface TransactionWithFromAndToLocalWalletIndex extends Omit<Transaction, 'from' | 'to'> {
	from: Numbers;
	to: Numbers;
}

export interface TransactionInfo extends Transaction {
	readonly blockHash?: Bytes;
	readonly blockNumber?: Numbers;
	readonly from: Address;
	readonly hash: Bytes;
	readonly transactionIndex?: Numbers;
}

export interface PopulatedUnsignedBaseTransaction {
	from: Address;
	to?: Address;
	value: Numbers;
	gas?: Numbers;
	gasPrice: Numbers;
	type: Numbers;
	input: Bytes;
	nonce: Numbers;
	networkId: Numbers;
	chain: ValidChains;
	hardfork: Hardfork;
	chainId: Numbers;
	common: Common;
	gasLimit: Numbers;
}

export interface PopulatedUnsignedEip2930Transaction extends PopulatedUnsignedBaseTransaction {
	accessList: AccessList;
}

export interface PopulatedUnsignedEip1559Transaction extends PopulatedUnsignedEip2930Transaction {
	gasPrice: never;
	maxFeePerGas: Numbers;
	maxPriorityFeePerGas: Numbers;
}
export type PopulatedUnsignedTransaction =
	| PopulatedUnsignedBaseTransaction
	| PopulatedUnsignedEip2930Transaction
	| PopulatedUnsignedEip1559Transaction;

export interface BlockBase<
	ByteType,
	HexStringType,
	NumberType,
	extraDataType,
	TransactionTypes,
	logsBloomType,
> {
	readonly parentHash: ByteType;
	readonly sha3Uncles: ByteType;
	readonly miner: HexStringType;
	readonly stateRoot: ByteType;
	readonly transactionsRoot: ByteType;
	readonly receiptsRoot: ByteType;
	readonly logsBloom?: logsBloomType;
	readonly difficulty?: NumberType;
	readonly number: NumberType;
	readonly gasLimit: NumberType;
	readonly gasUsed: NumberType;
	readonly timestamp: NumberType;
	readonly extraData: extraDataType;
	readonly mixHash: ByteType;
	readonly nonce: NumberType;
	readonly totalDifficulty: NumberType;
	readonly baseFeePerGas?: NumberType;
	readonly size: NumberType;
	readonly transactions: TransactionTypes;
	readonly uncles: Uncles;
	readonly hash?: ByteType;
}

export type Block = BlockBase<
	Bytes,
	Bytes,
	Numbers,
	Bytes,
	TransactionHash[] | TransactionInfo[],
	Bytes
>;

export interface FeeHistoryBase<NumberType> {
	readonly oldestBlock: NumberType;
	readonly baseFeePerGas: NumberType;
	readonly reward: NumberType[][];
	readonly gasUsedRatio: NumberType[];
}

export type FeeHistory = FeeHistoryBase<Numbers>;

export interface StorageProof {
	readonly key: Bytes;
	readonly value: Numbers;
	readonly proof: Bytes[];
}

export interface AccountObject {
	readonly balance: Numbers;
	readonly codeHash: Bytes;
	readonly nonce: Numbers;
	readonly storageHash: Bytes;
	readonly accountProof: Bytes[];
	readonly storageProof: StorageProof[];
}
