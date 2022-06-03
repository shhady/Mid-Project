import React from "react";
import "./styleCryptoData.css";
const Blockchain = () => {
  return (
    <div className="Bitcoin">
      <h2>What is the Blockchain?</h2>
      <p>
        Blockchain sounds complex, and it certainly can be, but its basic
        concept is really quite simple. Blockchain is a type of database. To be
        able to understand the blockchain, it is useful to first understand what
        a database actually is. A database is a set of information that is
        stored electronically on a computer system. Information or data in
        databases is usually organized in a tabular form to allow easier
        searching and filtering of specific information. What's the difference
        between someone using a spreadsheet to store information rather than a
        database? Spreadsheets are designed for one person or a small group of
        people to store and access limited amounts of information. In contrast,
        the database is designed to hold much larger amounts of information that
        can be accessed, filtered and processed quickly and easily by a number
        of users simultaneously. Large databases achieve this by placing data on
        servers made of powerful computers. These servers can sometimes be
        created using hundreds or thousands of computers in order to have the
        computing power and storage capacity needed for many users to access the
        database simultaneously. While a spreadsheet or database may be
        accessible to a number of people, it is often owned by a company and
        operated by a specific individual who has complete control over how it
        operates and the data in it.
      </p>
      <h2>Main Points</h2>
      <p>
        .1 is a specific type of database.
        <br /> 2. It differs from a typical database in the way it stores
        information; The blockchain stores data in blocks that are then linked
        together. <br />
        3. When new data comes in it is entered into a new block. Once the block
        is filled with data it is linked to the previous block, making the data
        relate to each other in chronological order.
        <br /> 4. Various types of information can be stored on the blockchain
        but the most common use so far has been as data saving for transactions.
        <br />
        5. In the case of Bitcoin, the blockchain is used in a decentralized
        manner so that no person or group controls – instead, all users
        collectively retain control. <br />
        6. Decentralized block chains are immutable, which means that the
        entered data is irreversible. For Bitcoin, this means that transactions
        are permanently recorded and anyone can view them.
      </p>

      <h2>How is a blockchain different from a database?</h2>
      <h4>Storage Structure</h4>
      <p>
        One of the main differences between a typical database and a blockchain
        is the way the data is organized. A blockchain holds information
        together into clusters, also known as blocks, which contain sets of
        information. Blocks have certain storage capabilities and, when filled,
        are chained to the previously filled block, forming a chain of data
        known as a "blockchain". All new information following that newly added
        block is grouped into a newly formed block which will also be added to
        the chain once it is filled out. A database builds its data into tables
        while a blockchain, as its name suggests, builds its data into pieces
        (blocks) that are linked together. This makes all blockchains databases
        but not all databases are blockchains. This system also inherently makes
        data schedule irreversible when implemented in a decentralized nature.
        When the block is filled, it is set in stone and becomes part of this
        timeline. Each block in the chain is given an exact timestamp when it is
        added to the chain.
      </p>
      <h4>decentralization</h4>
      <p>
        For the purpose of understanding the blockchain, it is useful to view it
        in the context of how it is implemented by Bitcoin. Like a database, a
        bitcoin needs a set of computers to store its blocks. For bitcoin, a
        blockchain is just a specific type of database that stores every bitcoin
        transaction ever made. In the case of Bitcoin, unlike most databases,
        these computers are not all under one roof, and each computer or group
        of computers is operated by a person or group of people. Imagine that a
        company has a server of 10,000 computers with a database containing all
        of a customer's account information. This company has a repository of
        all these devices under one roof and has full control over each of these
        devices and all the information contained within them. Likewise, a
        blockchain is made up of thousands of computers, but each computer or
        group of computers that hold the blocks are in a different geographic
        location and are all operated by separate individuals or groups of
        people. The computers that make up the Bitcoin network are called
        miners. In this model, the Bitcoin blockchain is used in a decentralized
        manner. (Central blockchains are computers whose network is owned by a
        single entity.) In a blockchain, every miner has a complete record of
        the data that has been stored on the blockchain since its inception. For
        bitcoins, the data represents the complete history of all bitcoin
        transactions. If a miner has an error in his data, he can use thousands
        of miners as a reference point to correct himself. This way, no one can
        change the information inside the network. For this reason, the
        transaction history in every block that makes up the Bitcoin blockchain
        is irreversible. If a user tampered with the Bitcoin transaction
        history, all the miners would easily review each other and identify the
        tamper. This system helps in creating an accurate and transparent order
        of events. For bitcoin. It is also possible for a blockchain to hold a
        variety of information such as legal contracts, country identifiers, or
        a company's product inventory. In order to change how this system
        operates, or the information stored in it, the majority of the computing
        power of a decentralized network will need to agree to said changes.
        This ensures that the changes that occur are in the interest of the
        majority.
      </p>
      <h4>Transparency</h4>
      <p>
        Due to the decentralized nature of the Bitcoin private blockchain, all
        transactions can be viewed transparently using blockchain explorers that
        allow anyone to see live transactions taking place. Each metal has its
        own version of the chain that is updated when new blocks are confirmed
        and added. This means that if you wish, you can track Bitcoin wherever
        it goes. For example, exchanges have been hacked in the past as those
        who held bitcoin on the exchange lost everything. While the hacker may
        be completely anonymous, the bitcoins they have extracted are easily
        traceable. If the bitcoins stolen in some of these hacks are moved or
        spent somewhere, it will be known.
      </p>
    </div>
  );
};
export default Blockchain;
