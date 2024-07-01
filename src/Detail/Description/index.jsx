import styles from "./styles.module.css";

const Description = () => (
  <div className={styles["content-description"]}>
    <div className={styles["description-title"]}>Tentang Paket</div>
    <div className={styles["description-title"]}>Include</div>
    <ul className={styles["description-list"]}>
      <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
      <li>Sudah termasuk bensin selama 12 jam</li>
      <li>Sudah termasuk Tiket Wisata</li>
      <li>Sudah termasuk pajak</li>
    </ul>
    <div className={styles["description-title"]}>Exclude</div>
    <ul className={styles["description-list"]}>
      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
      <li>
        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>Tidak termasuk akomodasi penginapan</li>
    </ul>
    <div className={styles["description-title"]}>
      Refund, Reschedule, Overtime
    </div>
    <ul className={styles["description-list"]}>
      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
      <li>
        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>Tidak termasuk akomodasi penginapan</li>
      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
      <li>
        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>Tidak termasuk akomodasi penginapan</li>
      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
      <li>
        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>Tidak termasuk akomodasi penginapan</li>
    </ul>
  </div>
);

export default Description;
