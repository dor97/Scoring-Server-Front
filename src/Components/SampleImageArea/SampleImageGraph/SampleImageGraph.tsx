import "./SampleImageGraph.css"
import { useEffect, useState } from "react";
import { SampleImageModel } from "../../../Models/SampleImageModel";
import { sampleImageService } from "../../../Services/SampleImageService";
import { notify } from "../../../Utils/Notify";
import { Line } from 'react-chartjs-2';
//import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, ChartEvent, ActiveElement } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Adapter for date handling

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);


function SampleImageGraph(): JSX.Element{

    const [images, setImages] = useState<SampleImageModel[]>([]);

    useEffect(() => {
        sampleImageService.getAllSampelImages()
            .then(dbSampleImages => setImages(dbSampleImages))
            .catch(err => notify.error(err));
    }, []);

    const [selectedPoint, setSelectedPoint] = useState(null);

    // Prepare the chart data
    const chartData = {
        labels: images.map(item => item.date), // Use Date objects for labels
        datasets: [
            {
                label: 'Progress',
                data: images.map(item => ({ x: item.date, y: Math.min(item.score, 1) })), // Use objects with x and y properties
                fill: false,
                borderColor: 'rgba(192,0,192,1)',
                tension: 0.1,
                pointBackgroundColor: 'rgba(192,0,192,1)',
                pointBorderColor: 'rgba(192,0,192,1)',
                pointRadius: 5,
                pointHoverRadius: 8,
            }
        ]
    };

    // Chart options
    const options = {
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'day' as const, // Adjust the unit as needed (day, month, year, etc.)
                    tooltipFormat: 'yyyy-MM-dd', // Tooltip format for dates
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Score'
                },
                min: 0,
                max: 1
            }
        },
        onClick: (event: ChartEvent, elements: ActiveElement[]) => {
            if (elements.length > 0) {
                const firstElement = elements[0];
                const index = firstElement.index;
                const clickedPoint = images[index];
                setSelectedPoint(clickedPoint);
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context: { dataIndex: number }) {
                        const dataPoint = images[context.dataIndex];
                        return `Date: ${dataPoint.date.toString().split('T')[0]}, Score: ${dataPoint.score}`;
                    }
                }
            }
        }
    };

    return (
        <div className="SampleImagesGraph">
            <div className="graph">
                <Line data={chartData} options={options} />
            </div>
            {selectedPoint && (
                <div className="point-details">
                    <h3>Point Details</h3>
                    <p>Date: {selectedPoint.date.toString().split('T')[0]}</p>
                    <p>Score: {selectedPoint.score}</p>
                    {selectedPoint.imageUrl && (
                        <div>
                            <img src={selectedPoint.imageUrl} alt="Selected Point" />
                        </div>
                    )}
                </div>
            )}
            
        </div>
    );
}

export default SampleImageGraph;