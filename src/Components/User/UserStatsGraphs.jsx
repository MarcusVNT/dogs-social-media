import { useEffect, useState } from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={[
            { x: "afsgyfg", y: 2 },
            { x: "bjsdjs", y: 3 },
            { x: "cjnsjdns", y: 5 },
            { x: "dsjdfns", y: 7 },
            { x: "edjfnsjd", y: 10 },
          ]}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar
            alignment="start"
            barWidth={30}
            data={[
              { x: "afsgyfg", y: 2 },
              { x: "bjsdjs", y: 3 },
              { x: "cjnsjdns", y: 5 },
              { x: "dsjdfns", y: 7 },
              { x: "edjfnsjd", y: 10 },
            ]}
          />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
